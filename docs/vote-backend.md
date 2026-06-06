# Public Pulse Backend Plan

The launch version sends visitors to two external surveys. The website itself does not store or submit answers.

## Fast Launch Survey Bridge

For the first public launch, the fastest practical route is to use two external forms:

- Chinese form: Wenjuanxing / 问卷星
- English form: Google Forms

Do not auto-route by IP for V1. It adds complexity, can misclassify VPN / roaming users, and makes failures harder to understand. Instead, show two explicit buttons:

- 中文用户填写问卷星
- Global / English users fill Google Form

This is also easier to explain in launch posts and easier to export as CSV later.

If a single global form becomes necessary, test Wenjuanxing global acceleration first. The tradeoff is that overseas users may still trust Google Forms more, while mainland users may not reliably open Google Forms.

For the first updates, export both response sets as CSV, normalize the matching bilingual options, and publish aggregate results. The next backend can be small. Supabase is a good first choice because it gives us a hosted database, row-level security, and a simple browser SDK.

## Why Not Build a Server Yet?

This project is a static GitHub Pages site. A custom server would add deployment, uptime, and security work too early.

For the first public version, we only need:

- Anonymous vote insert.
- Read-only aggregate results.
- Basic spam protection later.

## Suggested Table

Table name: `public_votes`

Columns:

- `id`: uuid, primary key, default generated value
- `created_at`: timestamp, default now
- `agi_year`: numeric, required
- `asi_year`: numeric, required
- `field_year`: numeric, required
- `field`: text, required
- `age_range`: text, optional
- `region`: text, optional
- `confidence`: text, optional

Optional definition submissions can either live in the same table at first, or move into a separate table once ranking matters.

Table name: `definition_votes`

Columns:

- `id`: uuid, primary key, default generated value
- `created_at`: timestamp, default now
- `type`: text, required, one of `agi` or `asi`
- `definition`: text, required
- `language`: text, optional
- `upvotes`: numeric, default 1

## Import Shape

Keep the option labels aligned across the two surveys, then map both CSV exports into one normalized dataset. The first importer should:

- Preserve the source form and submission timestamp.
- Convert year ranges into stable category keys.
- Keep uncertain answers separate from numeric medians.
- Publish only aggregate demographic results.
- Show a submitted display name only when attribution consent is present.

When live results become worthwhile, replace the CSV import with a small read-only aggregate API. Definition submissions should remain moderated before appearing on the public leaderboard.

## Supabase Policy Sketch

Read:

- Anyone can read aggregate vote rows, or a database view that removes sensitive fields.

Insert:

- Anyone can insert one vote.
- The client cannot update or delete rows.

Later:

- Add a lightweight rate limit using Cloudflare Turnstile or a serverless edge function.
- Store only coarse demographic buckets, not personally identifying details.
