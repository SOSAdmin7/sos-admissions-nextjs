# Team workflow

GitHub is the source of truth for website code. The private company Drive folder `SOS Website Team` holds the current operating guide, shared change log and historical chat/reference material. Each operator must connect the authorized Drive account and obtain their own authorized GitHub/Vercel access. Reading a Drive document does not grant deployment access or automatically import another chat's memory.

1. Read `AGENTS.md`, the private current guide, complete applicable quality rules and latest log entries. Confirm current main and production state.
2. Append a STARTED entry with a unique change ID, human name, exact authorized task, affected files/providers, base commit and branch. Check again for overlaps.
3. Work on a separate branch. Do not overwrite another operator's changes. Use a pull request, inspect the full diff and refresh main before merging.
4. Build, run relevant checks and inspect affected desktop/mobile behavior. Complete the required independent reviews on the frozen final version and resolve findings.
5. Publish only within the user's authorization. Verify the exact deployment and live URLs. Append results, tests, commit, deployment, rollback reference and limitations. A merge alone is not a live verification.
6. Update the private guide when operating facts change and retain dated exports of the guide/log in private Drive. Append corrections instead of deleting history.

The shared log coordinates work but is not a technical lock or an automatic audit of all provider changes. Revision-guarded appends reduce accidental overwrites. Git history preserves code changes; dated private snapshots preserve operational context. Long-term retention still depends on account access, storage, backups and operators following the process.

Do not add private links or credentials to this public repository. No application or provider settings are changed by these instructions.
