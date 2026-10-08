# SOS Admissions rebuild

This checkout was recovered from Vercel deployment `dpl_8LhxJ59b94tYPduM7JuN4tbsaW5P`. The recovery commit is `c7fad8c`, backed up on GitHub by tag `recovered-vercel-2026-08-05`. The old GitHub main branch omitted deployed work, including the academic crisis and MBA recommender pages.

Use Node 24 (`nvm use`), `npm ci`, `npm run build`, and `npm run lint`. `npm start -- --port 3100` serves the production build locally. Do not build over a running production preview: stop and restart it after building.

## Content sources

WordPress at sosadmissions.com was checked on October 1 and October 5, 2026. Service prices and conditions are centralized in `src/data/wordpress-services.json`; each entry records the original URL, WordPress page ID, source modification time, and source hash. The catalog in `service-catalog.json` controls program navigation. Keep prices in the centralized source only.

The original 197 WordPress articles were preserved in the audit sources. The rebuild serves 117 local articles; 82 legacy article paths redirect to current guides instead of repeating or retaining obsolete advice. They no longer request the WordPress REST API at runtime. Updating WordPress will not update this rebuild automatically. Refresh content deliberately, preserving corrections for old phone numbers, outdated admissions requirements, and broken links. Current LSAT, GMAT, DAT, NCLEX, USMLE, Casper, CASPA, AMCAS, ECFMG, UC, and CRNA guidance has been corrected against the relevant official sources. Medical-school pathways without the MCAT now use verified examples and explicit eligibility conditions. Generalized testing requirements have been corrected for PA, nursing, veterinary, and post-baccalaureate applicants. Article consolidation is recorded in `src/data/blog-aliases.json`; both blog paths and legacy root paths are preserved through permanent redirects. Old WordPress article and copied-image URLs are redirected to the new paths.

Reviews are actual WordPress testimonials, without fabricated schools, ratings, or outcomes. Preserve the named team and CNN photos. Public contact phone: 310-951-4008. Use “Free Initial Consultation” and do not display email addresses. Keep public copy free of em/en dashes and AI discussion.

## Contact and payment

The rebuild embeds SOS's existing public Wufoo forms directly into its contact, ordering, preliminary-information, Chinese-contact and payment pages. Ordering starts with the original contact-intake form `x1w4rk920kcpgz3`; the preliminary-information page uses `zrf3v6s11dqyvh`. The payment page lets visitors select the college/transfer or graduate/professional form. The college pricing link now opens that on-site payment page. EmbeddedForm.tsx uses Wufoo's embed URL and height messages, accepting messages only from the exact iframe window and the trusted Wufoo origin. Frames resize when Wufoo sends height updates and keep a small new-tab fallback link. Native iframe scrolling remains available if the provider does not send an update after a viewport change. Each payment form loads when first selected and remains mounted when switching categories, preserving entered information. Form IDs, prices, submission destinations and payment settings are unchanged. The provider's configured confirmation or merchant step can still redirect or open another window. No real lead or payment was submitted during verification. The payment next-steps page preserves the original interview-guide PDF locally, with a redirect from its WordPress upload URL. Their confirmations, payment configuration, and notifications are managed in Wufoo. The removed custom contact/checkout endpoints return 410; they must never accept a browser-supplied price or return a false success. Public thank-you URLs do not verify a submission or payment. No conversion is generated merely by visiting them.

Production analytics load only on sosadmissions.com or www.sosadmissions.com. Preview pages send `X-Robots-Tag: noindex, nofollow`.

## Source conflicts requiring business confirmation

- The standalone recommendation-letter WordPress page says $685 while program tables use other prices. The standalone rebuild page asks visitors to confirm a quote.
- WordPress's speech-language pathology page contains psychology copy and older prices. The rebuild does not publish those figures for SLP.
- General Nursing has amounts that differ from other healthcare pages. Its source prices are preserved; orders go through consultation.
- The SAT/ACT page lists 10- and 30-hour offers; the hosted college form lists a 50-hour offer. These are not interchangeable. The page routes visitors to consultation.
- The legacy PhD and nursing-consulting pages still quote pre-July-2026 packages. Their conflicting price tables are withheld; visitors are asked to confirm scope and price by phone.
- The FAQ now uses the documented current 15-minute consultation and current meeting platforms.
- Package savings claims are not carried forward without business confirmation.

The local proposed privacy page corrects WordPress's statement that SOS only edits essays, aligning it with the documented application-writing service. Review this specific wording as part of publication approval; all other source terms are preserved.

## Release

The user authorized publication to the existing Vercel review address, `https://sos-admissions-nextjs.vercel.app/`. Publish only the exact candidate passed by two independent model reviewers. Do not redeploy the stale main branch. Main-domain cutover and billing changes require separate owner direction.

Before main-domain launch, confirm conflicting service offers and outcome claims; approve the proposed privacy wording; approve the article-consolidation and shorter-guide editorial strategy; move to an appropriate commercial hosting plan; and perform owner-operated Wufoo submission, receipt, notification, redirect, and conversion checks. Validate indexing and analytics on the actual main-domain deployment at cutover. Public thank-you pages use conditional next-step copy because a URL visit alone cannot prove submission or payment. No payment or real lead was submitted in the audit.

The October 5 reviewer fixes complete truncated service introductions, repair testimonial punctuation, correct obsolete program/application metadata, restore the original ordering and preliminary-information paths, improve pricing-table readability, localize Chinese metadata, restore basic organization/service/article structured data, and tighten spacing. All 402 displayed source price amounts remain unchanged. Six short article titles now accurately describe planning guides instead of promising complete coverage.


## Steel blue preview release (2026-10-07)

- Approved palette: steel blue `#2F536E`, deep shade `#19374A`, gradient end `#3D657F`, pale background `#EDF3F6`. Shared tokens replace hardcoded navy values; social images use the same palette. Existing orange action buttons remain, with white-text contrast preserved.
- Consultation buttons now precede videos on the home and service pages. Contact/order/payment wrappers have tighter spacing and more usable mobile form width. Wufoo controls remain owned by the external form theme; the admin login is required to change them.
- Retained articles now use root URLs through `blogPath()`: 111 exact WordPress article paths restored, two replacement-guide slugs also at root, four page/post collisions remain under `/blog/`. Retained `/blog/` URLs render as 200 aliases with root canonicals so cached earlier root-to-blog permanent redirects cannot form a loop. Internal article links use the canonical root paths. Consolidated legacy articles still redirect to reviewed guides. Do not restore outdated admissions claims from the original articles.
- Keep the five WordPress page/post collisions under page priority. Dental application is already a published service page; the four retained conflicting articles are explicitly listed in `blog-path.ts`.
- The optometry URL's captured WordPress content is actually the generic graduate-school page. Its redirect to graduate-school-application is semantically equivalent; do not invent an optometry-specific service or price. Preliminary-information-form2 now goes to the intake form, not the contact form.
- Accurate WP academic-crisis and NP metadata restored; payment title restored, missing privacy and SLP descriptions added. Other title/description differences retain previous corrections (unverified acceptance rates removed, retired programs removed, Chinese localization, current dates and accurate article scope). Static page sharing metadata uses `pageMetadata()` to prevent homepage metadata inheritance.
- Sitemap includes original article canonicals and privacy policy. The 27 `/services/` detail aliases intentionally canonicalize to root pages and stay out of sitemap. Get-started and thank-you pages stay excluded/noindex. Preview remains noindex via response header; analytics remain production-host-only.
- Dependency triage: patched source-map-js to 1.2.2. Remaining npm findings: braces <=3.0.3 (latest release, used by Next ESLint tooling; no patch available), selector-parser 6.0.10 pinned by typography (latest typography also pins it). No forced Next downgrade or untested parser major override. This build processes trusted repository input; findings are retained for pre-launch follow-up.
- This is a preview update, not production cutover. Current WordPress database/files backup, staff device review, verified test-lead receipts, Wufoo theme edits, and unresolved business pricing decisions remain prerequisites to main-domain launch. No cards or payments were submitted.
