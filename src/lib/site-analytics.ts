// Only business event labels go to GA4. Never pass form values, applicant
// details, IP addresses, arbitrary link text, query strings, or a CRM lead ID.
export const GA4_ID = "G-QKZ85G7M1L";

export type SiteEvent =
  | "sos_cta_click"
  | "sos_phone_click"
  | "sos_form_view"
  | "sos_form_ready"
  | "sos_form_open_external"
  | "sos_payment_program"
  | "sos_video_play_click"
  | "sos_video_start"
  | "sos_video_progress"
  | "sos_video_complete";

type EventParams = {
  form_name?: string;
  link_area?: "header" | "footer" | "content";
  target_path?: string;
  program?: "college" | "graduate";
  video_id?: string;
  video_percent?: number;
};

export function isAnalyticsHost(host: string) {
  return host === "sosadmissions.com" || host === "www.sosadmissions.com";
}

const forms: Record<string, string> = {
  xtn0e7d05hti4y: "contact",
  "sos-admissions-college-and-transfer-payment": "college_payment",
  z193y9v40gmzj03: "graduate_payment",
  x1w4rk920kcpgz3: "ordering",
  zrf3v6s11dqyvh: "preliminary_information",
  z4rbav20iiyel5: "chinese_contact",
};
const targets = new Set([
  "/contact-us/", "/contactchinese/", "/get-started/", "/admissions-options-page/",
  "/purchase/", "/info-form/", "/payment/",
]);

export function analyticsFormName(url: string): string | undefined {
  try {
    const parsed = new URL(url);
    if (parsed.origin !== "https://lasernailtherapy.wufoo.com") return;
    const match = /^\/(?:forms|embed)\/([^/]+)\/?$/.exec(parsed.pathname);
    return match && Object.prototype.hasOwnProperty.call(forms, match[1]) ? forms[match[1]] : undefined;
  } catch { return; }
}

export function analyticsTargetPath(href: string, origin: string): string | undefined {
  try {
    const parsed = new URL(href, origin);
    if (parsed.origin !== origin) return;
    const path = parsed.pathname.replace(/\/$/, "") + "/";
    return targets.has(path) ? path : undefined;
  } catch { return; }
}

export function trackSiteEvent(event: SiteEvent, params: EventParams = {}) {
  if (typeof window === "undefined" || !isAnalyticsHost(window.location.hostname)) return;
  const w = window as unknown as {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  };
  // The existing GTM Google tag owns configuration, cookies, session identity,
  // page views and consent. Do not create another identity or a second config.
  const safe: Record<string, string | number> = { send_to: GA4_ID };
  if (params.form_name && Object.values(forms).includes(params.form_name)) safe.form_name = params.form_name;
  if (params.link_area && ["header", "footer", "content"].includes(params.link_area)) safe.link_area = params.link_area;
  if (params.target_path && targets.has(params.target_path)) safe.target_path = params.target_path;
  if (params.program === "college" || params.program === "graduate") safe.program = params.program;
  if (params.video_id && (/^[A-Za-z0-9_-]{11}$/.test(params.video_id) || params.video_id === "chinese_introduction")) safe.video_id = params.video_id;
  if ([25, 50, 75, 100].includes(params.video_percent ?? -1)) safe.video_percent = params.video_percent!;
  w.dataLayer = w.dataLayer || [];
  w.gtag = w.gtag || function () {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer!.push(arguments);
  };
  w.gtag("event", event, safe);
}
