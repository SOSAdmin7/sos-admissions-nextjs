// Offline only: tests must not submit forms or send conversion requests.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
function load(file, mocks = {}, globals = {}) {
  const module = { exports: {} };
  const js = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  vm.runInNewContext(js, { module, exports: module.exports, require: n => mocks[n] || require(n), URL, ...globals }, { filename: file });
  return module.exports;
}
const window = { location: { hostname: 'sosadmissions.com', origin: 'https://sosadmissions.com' } };
const analytics = load('src/lib/site-analytics.ts', {}, { window });
const { analyticsFormName, analyticsTargetPath, trackSiteEvent } = analytics;
assert.equal(analyticsFormName('https://lasernailtherapy.wufoo.com/forms/xtn0e7d05hti4y/'), 'contact');
assert.equal(analyticsFormName('https://evil.test/forms/xtn0e7d05hti4y/'), undefined);
assert.equal(analyticsFormName('https://lasernailtherapy.wufoo.com/forms/private-client-name/'), undefined);
assert.equal(analyticsFormName('https://lasernailtherapy.wufoo.com/forms/constructor/'), undefined);
assert.equal(analyticsTargetPath('/contact-us/?email=private@example.test#essay', window.location.origin), '/contact-us/');
for (const path of ['/contact-us/', '/contactchinese/', '/get-started/', '/admissions-options-page/', '/purchase/', '/info-form/', '/payment/']) {
  assert.equal(analyticsTargetPath(path + '?email=private@example.test', window.location.origin), path, 'all public inquiry, ordering and payment routes are covered');
  assert.equal(analyticsTargetPath(path.slice(0, -1), window.location.origin), path, 'optional trailing slash');
  trackSiteEvent('sos_cta_click', { target_path: path });
  assert.equal(window.dataLayer.at(-1)[2].target_path, path, 'all public CTA paths survive the outbound allowlist');
}
window.dataLayer.length = 0;
assert.equal(analyticsTargetPath('https://evil.test/contact-us/', window.location.origin), undefined);
assert.equal(analyticsTargetPath('/clients/private-name', window.location.origin), undefined);
trackSiteEvent('sos_form_view', { form_name: 'contact', email: 'private@example.test', essay: 'private essay' });
let sent = window.dataLayer.map(e => Array.from(e));
assert.equal(sent[0][0], 'event');
assert.equal(sent[0][2].send_to, 'G-QKZ85G7M1L');
assert.equal(JSON.stringify(sent).includes('private'), false);
assert.deepEqual(Object.keys(sent[0][2]).sort(), ['form_name', 'send_to']);
trackSiteEvent('sos_cta_click', { target_path: '/contact-us/?email=private@example.test', form_name: 'private', video_id: 'private@example.test' });
assert.equal(Object.keys(window.dataLayer.at(-1)[2]).length, 1, 'runtime allowlist rejects arbitrary metadata');
for (const host of ['localhost', 'archive.sosadmissions.com', 'sos-admissions-nextjs.vercel.app', 'sosadmissions.com.evil.test']) {
  window.location.hostname = host;
  const count = window.dataLayer.length;
  trackSiteEvent('sos_phone_click');
  assert.equal(window.dataLayer.length, count, 'production-only custom events');
}
window.location.hostname = 'sosadmissions.com';
assert.equal(window.dataLayer.some(e => ['config', 'consent'].includes(e[0]) || e[1] === 'purchase' || e[1] === 'conversion'), false, 'existing Google identity/consent/conversions remain owned by GTM');

// Model iframe sizing/visibility messages, including hidden payment forms,
// cross-origin forgeries, Strict Mode effect replay, and cleanup.
const received = [];
const effects = [];
const handlers = new Map();
let intersect;
const frame = { contentWindow: { postMessage() {} }, addEventListener() {}, removeEventListener() {} };
const fakeWindow = { addEventListener: (k,f) => handlers.set(k,f), removeEventListener: (k,f) => { if (handlers.get(k) === f) handlers.delete(k); } };
let refIndex = 0;
const refs = [];
const mockReact = {
  useEffect: f => effects.push(f), useId: () => ':test:', useState: n => [n, () => {}],
  useRef: init => { const i = refIndex++; return refs[i] || (refs[i] = { current: init }); },
};
class RO { observe() {} disconnect() {} }
class IO { constructor(fn) { intersect = fn; } observe() {} disconnect() {} }
const { EmbeddedForm } = load('src/components/EmbeddedForm.tsx', {
  react: mockReact,
  '@/lib/site-analytics': { analyticsFormName, trackSiteEvent: (...args) => received.push(args) },
}, { window: fakeWindow, ResizeObserver: RO, IntersectionObserver: IO });
EmbeddedForm({ url: 'https://lasernailtherapy.wufoo.com/forms/xtn0e7d05hti4y/', title: 'Contact' });
refs[0].current = frame;
let cleanup = effects.map(fn => fn());
intersect([{ isIntersecting: false, intersectionRect: { width: 0, height: 0 } }]);
assert.equal(received.length, 0);
intersect([{ isIntersecting: true, intersectionRect: { width: 300, height: 10 } }]);
intersect([{ isIntersecting: true, intersectionRect: { width: 300, height: 400 } }]);
assert.equal(received.length, 1, 'view only once after visible pixels');
const message = handlers.get('message');
message({ origin: 'https://evil.test', source: frame.contentWindow, data: '900|x' });
message({ origin: 'https://lasernailtherapy.wufoo.com', source: {}, data: '900|x' });
message({ origin: 'https://lasernailtherapy.wufoo.com', source: frame.contentWindow, data: 'submitted' });
message({ origin: 'https://lasernailtherapy.wufoo.com', source: frame.contentWindow, data: '0|x' });
assert.equal(received.length, 1, 'untrusted or invalid messages cannot record readiness');
message({ origin: 'https://lasernailtherapy.wufoo.com', source: frame.contentWindow, data: '900|x' });
message({ origin: 'https://lasernailtherapy.wufoo.com', source: frame.contentWindow, data: '1200|x' });
assert.equal(received.length, 2, 'valid readiness once even as form resizes');
cleanup.forEach(fn => fn());
cleanup = effects.map(fn => fn());
intersect([{ isIntersecting: true, intersectionRect: { width: 300, height: 400 } }]);
handlers.get('message')({ origin: 'https://lasernailtherapy.wufoo.com', source: frame.contentWindow, data: '900|x' });
assert.equal(received.length, 2, 'effect replay does not duplicate events');
assert.deepEqual(received.map(e => e[0]), ['sos_form_view', 'sos_form_ready'], 'never invent successful submission from iframe activity');
cleanup.forEach(fn => fn());
assert.equal(handlers.size, 0);
console.log('PASS: GA4 destination, no PII payloads, strict metadata/host/form/target allowlists, no duplicate configuration/conversions, hidden-frame visibility, verified iframe origin/source, readiness bounds, replay deduplication and cleanup. Offline only.');
