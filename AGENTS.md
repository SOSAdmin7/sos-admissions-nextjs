# SOS website operating instructions

Before editing, read the current private company Drive folder named `SOS Website Team`, specifically `START HERE - SOS Website Team` and `SOS Website - Shared Change Log`. Connect the company-approved Drive account and verify access. The guide and reference packet identify current account context and operating rules. Do not assume local paths or authentication from another operator's computer work here.

Read the complete approved quality checklist, operator handoff, applicable web/company specifications and reviewer addendum in that private reference packet. Current explicit user instructions supersede historical instructions. Keep an internal requirements, source, finding and verification record. Obtain the required Grok plus distinct ChatGPT substantive reviews, separated from the writer, on the exact final change. Resolve material findings before release.

Append a named STARTED log entry before edits, identifying the human operator, UTC time, unique change ID, requested scope, base commit and branch. Read recent entries for overlapping work. The Doc is not a lock. Use a separate branch/worktree, preserve other operators' changes, and refresh main before merging. Use a pull request and record its link. Append completion, tests, final commit/deployment, live verification and rollback reference. Never replace the entire log or erase old decisions; use revision-guarded appends and dated corrections. If Drive is unavailable, retain an internal pending entry and reconcile it before claiming handoff completion. Do not delay an urgent authorized recovery solely for logging.

This source repository is PUBLIC. Never commit private Drive URLs, chat transcripts, account inventories, credentials, customer data, backup archives or private review packets. Keep those in approved private storage. Code and commit history belong here; operational details belong in the private handoff.

Use Node.js 24 and the committed lockfile. Run `npm ci` and `npm run build`, plus checks appropriate to the change. Tracking changes require the existing tracking regression scripts. Inspect affected desktop/mobile pages and public URLs. A successful build is not proof of deployment. Verify the exact production deployment and real URLs before calling a change live.

Preserve existing URLs, metadata, canonicals, redirects, preview search exclusion and archive protection. Keep "Free Initial Consultation," compact spacing, CNN/team photos and no publicly displayed email address. Preserve approved wording, prices, videos and video order unless the user's task authorizes a change. Do not invent claims.

Stripe and payment integrations are READ ONLY unless the user explicitly approves the particular edit. Do not change webhooks, keys, checkout, live/test mode or payment attribution under general website authorization. Form view/ready and existing Ads Purchase page-entry events do not prove a paid transaction. Do not submit real payment details for tests. Any authorized test lead must include "test." Never send email from this workflow.

Honor the task's existing publication authorization. If absent, show the reviewed result and obtain approval before production publication. A merge to main normally deploys. Record provider configuration changes as well as code changes. See `docs/team-workflow.md` for the public-safe workflow overview.
