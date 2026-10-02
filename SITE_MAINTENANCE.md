# SOS Admissions rebuild

This checkout was recovered from Vercel deployment `dpl_8LhxJ59b94tYPduM7JuN4tbsaW5P`. The recovery commit is `c7fad8c`, backed up on GitHub by tag `recovered-vercel-2026-08-05`. The old GitHub main branch omitted deployed work, including the academic crisis and MBA recommender pages.

Use Node 24 (`nvm use`), `npm ci`, `npm run build`, and `npm run lint`. `npm start -- --port 3100` serves the production build locally. Do not build over a running production preview: stop and restart it after building.

## Content sources

WordPress at sosadmissions.com was checked on October 1, 2026. Service prices and conditions are centralized in `src/data/wordpress-services.json`; each entry records the original URL, WordPress page ID, source modification time, and source hash. The catalog in `service-catalog.json` controls program navigation. Keep prices in the centralized source only.

The original 197 WordPress articles were preserved in the audit sources. The rebuild serves 120 local articles; 79 legacy article paths redirect to current guides instead of repeating or retaining obsolete advice. They no longer request the WordPress REST API at runtime. Updating WordPress will not update this rebuild automatically. Refresh content deliberately, preserving corrections for old phone numbers, outdated admissions requirements, and broken links. Current LSAT, GMAT, DAT, NCLEX, USMLE, Casper, CASPA, AMCAS, ECFMG, UC, and CRNA guidance has been corrected against the relevant official sources. Medical-school pathways without the MCAT now use verified examples and explicit eligibility conditions. Generalized testing requirements have been corrected for PA, nursing, veterinary, and post-baccalaureate applicants. Article consolidation is recorded in `src/data/blog-aliases.json`; both blog paths and legacy root paths are preserved through permanent redirects. Old WordPress article and copied-image URLs are redirected to the new paths.

Reviews are actual WordPress testimonials, without fabricated schools, ratings, or outcomes. Preserve the named team and CNN photos. Public contact phone: 310-951-4008. Use “Free Initial Consultation” and do not display email addresses. Keep public copy free of em/en dashes and AI discussion.

## Contact and payment

The rebuild links to SOS's existing public Wufoo forms. Their confirmations, payment configuration, and notifications are managed in Wufoo. The removed custom contact/checkout endpoints return 410; they must never accept a browser-supplied price or return a false success. Public thank-you URLs do not verify a submission or payment. No conversion is generated merely by visiting them.

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

No DNS change or deployment is part of the local repair verification. Do not redeploy the stale main branch. Before a release, obtain approval for the reviewed candidate, verify the Vercel plan and runtime, use this recovered branch, and check contact routing and hosted payment receipts without creating false conversions. A real submission/payment test requires the appropriate owner-operated test and notification checks.
