# Public Pulse Backend Plan

The current MVP stores submitted votes in the visitor's browser. That is enough to test the interaction, but it does not create a shared public dataset.

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

## Supabase Policy Sketch

Read:

- Anyone can read aggregate vote rows, or a database view that removes sensitive fields.

Insert:

- Anyone can insert one vote.
- The client cannot update or delete rows.

Later:

- Add a lightweight rate limit using Cloudflare Turnstile or a serverless edge function.
- Store only coarse demographic buckets, not personally identifying details.

