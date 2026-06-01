# Survey Sync Plan

This is the practical path for making survey results update the site without running a custom server.

## V1 Launch

- Chinese responses live in Wenjuanxing.
- English responses live in Google Forms / Google Sheets.
- The website shows starter statistics and links/embeds the forms.
- Public stats are updated manually from exported CSV when needed.

## V1.5 Semi-Automatic Updates

Use a small merge script and a GitHub Actions schedule:

1. Export Wenjuanxing responses as CSV.
2. Let Google Forms write responses into Google Sheets.
3. Publish or export the Google Sheet as CSV.
4. Merge both CSV files into website JSON.
5. Commit the updated JSON back to the repo.

This can run weekly or every two weeks.

The only tricky part is Wenjuanxing automation. Wenjuanxing now has official AI / automation tooling around OpenAPI, including CLI, MCP Server, and a TypeScript SDK, with API Key based access. Its public help center also documents manual raw-response export from the management backend.

Practical recommendation:

- Google Forms: automate first. Link responses to Google Sheets, then read a published/exported CSV on a GitHub Actions schedule.
- Wenjuanxing option A: if the account can access OpenAPI, configure `WJX_API_KEY` and use the official CLI/SDK to download responses on the same schedule.
- Wenjuanxing option B: if OpenAPI access is not available or unstable, keep a manual CSV export step for the Chinese survey and drop the CSV into the repo before running the merge script.

Relevant official docs:

- Wenjuanxing AI kit / OpenAPI tooling: https://www.wjx.cn/help/help.aspx?helpid=905
- Wenjuanxing manual raw response export: https://www.wjx.cn/help/help.aspx?catid=22&h=1
- Google Forms response destination: https://support.google.com/docs/answer/2917686
- Google Forms CSV export: https://support.google.com/docs/answer/139706

## Future Fully Automatic Version

Replace external forms with a small database:

- Supabase or Firebase for anonymous submissions.
- The website writes directly to the database.
- Aggregates update immediately.
- Form links remain useful for Twitter / WeChat distribution, but the website becomes the source of truth.

## Recommended Next Step

Launch with two external forms first. After there are real responses, decide whether manual CSV updates are enough or whether live public stats are worth the extra backend work.
