// Runs each customManager regex of the presets on real files copied from the
// consuming repos (test/fixtures/<repo>/<path in that repo>) and compares the
// extracted dependencies with test/cases.json. For a native manager, checks
// only that its managerFilePatterns reach the path.
// Run: cd test && npm ci && npm test
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import JSON5 from 'json5';

const root = new URL('..', import.meta.url);
const read = (p) => readFileSync(new URL(p, root), 'utf8');
const cases = JSON.parse(read('test/cases.json'));

// Renovate pattern strings are "/regex/" or a glob; only the regex form is used here.
const toRegExp = (pattern) => {
  const m = pattern.match(/^\/(.*)\/([a-z]*)$/s);
  assert.ok(m, `not a regex pattern: ${pattern}`);
  return new RegExp(m[1], m[2]);
};
const reaches = (patterns, path) => patterns.some((p) => toRegExp(p).test(path));
const render = (tpl, groups) => tpl.replace(/{{\s*(\w+)\s*}}/g, (_, k) => groups[k] ?? '');

for (const c of cases) {
  test(`${c.preset} ${c.manager}: ${c.why}`, () => {
    const preset = JSON5.parse(read(c.preset));
    if (typeof c.manager === 'string') {
      assert.ok(reaches(preset[c.manager].managerFilePatterns, c.path), `${c.manager} does not reach ${c.path}`);
      return;
    }
    const manager = preset.customManagers[c.manager];
    const path = c.inline ? c.inline.path : c.fixture.split('/').slice(1).join('/');
    const content = c.inline ? c.inline.content : read(`test/fixtures/${c.fixture}`);
    assert.ok(reaches(manager.managerFilePatterns, path), `manager ${c.manager} does not reach ${path}`);

    const deps = [];
    for (const s of manager.matchStrings) {
      for (const m of content.matchAll(new RegExp(s, 'g'))) {
        const g = Object.fromEntries(Object.entries(m.groups).filter(([, v]) => v !== undefined));
        for (const [key, tpl] of Object.entries(manager)) {
          const field = key.match(/^(\w+)Template$/)?.[1];
          if (field) g[field] = render(tpl, g);
        }
        delete g.registryDomain;
        delete g.namespace;
        delete g.chart;
        deps.push(g);
      }
    }
    assert.deepEqual(deps, c.deps);
  });
}
