# Launch Checklist / 发布检查清单

## Must Have Before Public Posting

- Public GitHub Pages URL opens: `https://marco-wang-ai.github.io/intelligence-horizon/`
- Latest local changes are committed and pushed to `main`.
- Chinese and English survey links are added in `app.js`.
- Social preview image works through the page metadata.
- Raw reference photos are not committed.

## Survey Links Needed

For a fast launch, only the first two links are required:

- Wenjuanxing public share link for Chinese users.
- Google Form public share link for English/global users.

Nice to have:

- Google Form embed URL.
- Wenjuanxing embed URL if available.
- Google Sheets published CSV/export URL for future scheduled sync.
- Wenjuanxing API Key only if we automate export later.

## Account Notes

Do not share passwords in the repo or chat.

For Google Forms and Wenjuanxing, the owner can either:

- create the forms manually using `docs/survey-forms.md`, then paste the public links here, or
- log in locally and let Codex operate the browser with explicit permission.

For automation:

- Google Forms can be connected through Google Sheets CSV export and GitHub Actions.
- Wenjuanxing can use its own API Key if the account has OpenAPI access. This is a Wenjuanxing API Key, not an OpenAI API key.
- If Wenjuanxing OpenAPI is unavailable, export CSV manually and merge it with the same script.
