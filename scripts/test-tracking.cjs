// Offline behavior tests. No Google requests or live conversions are sent.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

function load(file, mocks = {}, globals = {}) {
  const module = { exports: {} };
  const js = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  vm.runInNewContext(js, { module, exports: module.exports, require: n => mocks[n] || require(n), URLSearchParams, ...globals }, { filename: file });
  return module.exports;
}
function scenario(hostname = 'sosadmissions.com') {
  let pathname = '/';
  const scripts = [];
  const storage = new Map();
  const window = { location: { hostname, pathname, href: `https://${hostname}/?gclid=test-only`, search: '?gclid=test-only' } };
  const effects = [];
  const provider = load(path.resolve('src/components/GTMProvider.tsx'), {
    react: { useEffect: fn => effects.push(fn) },
    'next/navigation': { usePathname: () => pathname },
    '@/lib/phone-forwarding': { setForwardingNumber: () => {} },
  }, {
    window,
    document: { head: { appendChild: s => scripts.push(s) }, createElement: () => ({}), referrer: '' },
    localStorage: { getItem: k => storage.get(k), setItem: (k,v) => storage.set(k,v) },
    fetch: () => { throw new Error('Unexpected attribution request'); },
  });
  const visit = (next, query = '') => {
    pathname = next;
    Object.assign(window.location, { pathname, href: `https://${hostname}${next}${query}`, search: query });
    effects.length = 0; provider.GTMScript(); effects.forEach(fn => fn());
  };
  return { window, scripts, visit };
}
const s = scenario();
s.visit('/');
assert.equal(s.scripts.length, 2, 'initializes immediately without interaction/timer');
assert.equal(s.window.dataLayer.filter(e => e.event === 'gtm.js').length, 1);
s.visit('/'); // effect replay/remount
assert.equal(s.scripts.length, 2, 'does not load duplicate libraries');
assert.equal(s.window.dataLayer.filter(e => e.event === 'sos_route_view').length, 1);
s.visit('/purchase/');
s.visit('/purchase/', '?changed=1#anchor');
s.visit('/info-form/');
s.visit('/');
s.visit('/purchase/'); // real revisit/back/forward
const events = s.window.dataLayer.filter(e => e.event === 'sos_route_view');
assert.deepEqual(Array.from(events, e => e.sos_route_path), ['/', '/purchase/', '/info-form/', '/', '/purchase/']);
assert.equal(events[1].sos_route_url, 'https://sosadmissions.com/purchase/', 'queued event URL stays immutable after later navigation');
assert.equal(s.window.dataLayer.filter(e => e[0] === 'event' && e[1] === 'conversion').length, 0, 'site does not duplicate GTM conversions');
for (const host of ['localhost', 'sos-admissions-nextjs.vercel.app', 'archive.sosadmissions.com', 'sosadmissions.com.evil.test']) {
  const p = scenario(host); p.visit('/purchase/'); assert.equal(p.scripts.length, 0); assert.equal(p.window.dataLayer, undefined);
}
const www = scenario('www.sosadmissions.com'); www.visit('/info-form/'); assert.equal(www.scripts.length, 2);
const phone = load(path.resolve('src/lib/phone-forwarding.ts'));
const { PhoneLink } = load(path.resolve('src/components/PhoneLink.tsx'), {
  react: { ...React, useSyncExternalStore: (_subscribe, snapshot) => snapshot() },
  '@/lib/phone-forwarding': phone,
});
const render = children => renderToStaticMarkup(PhoneLink({ className: 'phone', children }));
assert.match(render('Call 310-951-4008'), /href="tel:\+13109514008"/);
let notifications = 0;
const unsubscribe = phone.subscribeForwardingNumber(() => notifications++);
phone.setForwardingNumber('(800) 555-0101', '+18005550101');
const markup = render([React.createElement('svg', {key:'icon', 'aria-hidden':true}), React.createElement('span', {key:'text'}, '(310) 951-4008')]);
assert.match(markup, /href="tel:\+18005550101"/);
assert.match(markup, /<svg/); assert.match(markup, /<span>\(800\) 555-0101<\/span>/);
assert.doesNotMatch(markup, /951-4008/);
assert.match(render('致电310-951-4008'), /致电\(800\) 555-0101/, 'newly mounted/mobile/Chinese link uses same forwarding number');
phone.setForwardingNumber('(800) 555-0101', '+18005550101');
assert.equal(notifications, 1, 'duplicate callback does not rerender');
phone.setForwardingNumber('bad', 'javascript:alert(1)');
assert.equal(notifications, 1, 'invalid dial target rejected');
unsubscribe();
assert.equal(phone.getServerForwardingNumber(), null, 'SSR keeps original number until hydration');
console.log('PASS: immediate loading, route entry/replay/revisit/query handling, immutable queued URLs, host restrictions, no direct conversion duplication, phone fallback/text/dial/icons/new mounts/invalid data. Offline only.');
const { forwardPhoneHtml } = load(path.resolve('src/components/PhoneHtml.tsx'), {'@/lib/phone-forwarding': phone});
const forwarding = phone.getForwardingNumber();
const fixture = '<p>Call <a class="phone" href="tel:+13109514008"><strong>310-951-4008</strong></a> or <a href="tel:+12125550100">212-555-0100</a></p>';
assert.equal(forwardPhoneHtml(fixture, null), fixture);
const forwarded = forwardPhoneHtml(fixture, forwarding);
assert.match(forwarded, /href="tel:\+18005550101"><strong>\(800\) 555-0101<\/strong>/);
assert.match(forwarded, /href="tel:\+12125550100">212-555-0100/);
assert.match(forwardPhoneHtml('310-951-4008', {...forwarding, formatted: '<b>&"'}), /&lt;b&gt;&amp;&quot;/);
const blog = JSON.parse(fs.readFileSync('src/data/blog-content.json','utf8'));
const crisis = JSON.parse(fs.readFileSync('src/data/academic-crisis-consulting-content.json','utf8'));
const strings = value => typeof value === 'string' ? [value] : Object.values(value || {}).flatMap(strings);
let count = 0;
for (const html of [...strings(blog), crisis]) {
  const matches = html.match(/href=["']tel:\+?1?3109514008["']/g) || [];
  if (!matches.length) continue;
  count += matches.length;
  const output = forwardPhoneHtml(html, forwarding);
  assert.doesNotMatch(output, /href=["']tel:\+?1?3109514008["']/);
  assert.equal((output.match(/href="tel:\+18005550101"/g)||[]).length, matches.length);
}
assert.equal(count, 95, 'all 94 article links plus crisis content covered');
console.log('PASS: 95 HTML-content phone links, fallback byte preservation, formatting, unrelated numbers and HTML escaping.');
