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

The only tricky part is Wenjuanxing automation. If the account supports an API or stable export URL, it can be automated. If not, keep Wenjuanxing as a manual CSV upload while automating the Google Sheet side.

## Future Fully Automatic Version

Replace external forms with a small database:

- Supabase or Firebase for anonymous submissions.
- The website writes directly to the database.
- Aggregates update immediately.
- Form links remain useful for Twitter / WeChat distribution, but the website becomes the source of truth.

## Recommended Next Step

Launch with two external forms first. After there are real responses, decide whether manual CSV updates are enough or whether live public stats are worth the extra backend work.
