# Public Pulse Backend Plan

The current MVP stores submitted votes in the visitor's browser. That is enough to test the interaction, but it does not create a shared public dataset.

## Fast Launch Survey Bridge

For the first public launch, the fastest practical route is to use two external forms:

- Chinese form: Wenjuanxing / 问卷星
- English form: Google Forms

Do not auto-route by IP for V1. It adds complexity, can misclassify VPN / roaming users, and makes failures harder to understand. Instead, show two explicit buttons:

- 中文用户填写问卷星
- Global / English users fill Google Form

This is also easier to explain in launch posts and easier to export as CSV later.

If a single global form becomes necessary, test Wenjuanxing global acceleration first. The tradeoff is that overseas users may still trust Google Forms more, while mainland users may not reliably open Google Forms.

The next backend can be small. Supabase is a good first choice because it gives us a hosted database, row-level security, and a simple browser SDK.

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

## API Shape

The frontend already has two functions that form the backend boundary:

```js
async function fetchPublicVotes() {
  return localVotes();
}

async function savePublicVote(vote) {
  const votes = localVotes().concat(vote);
  localStorage.setItem("ih_votes", JSON.stringify(votes));
  return vote;
}
```

When the backend is ready, only these functions should change. The page rendering can stay the same.

Definition submissions follow the same boundary through `savePublicVote()` for now. If the definition leaderboard becomes a real public feature, split that logic into `fetchPublicDefinitions()` and `savePublicDefinition()`.

## Supabase Policy Sketch

Read:

- Anyone can read aggregate vote rows, or a database view that removes sensitive fields.

Insert:

- Anyone can insert one vote.
- The client cannot update or delete rows.

Later:

- Add a lightweight rate limit using Cloudflare Turnstile or a serverless edge function.
- Store only coarse demographic buckets, not personally identifying details.
