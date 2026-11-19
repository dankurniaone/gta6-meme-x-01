# Post text for X

Copy this text exactly when posting the meme (`meme.png`) on X from
@dankurniaone (public account). The picture and this text together are the
meme.

> **IMPORTANT — replace `[PLAY-CODE]` before posting.** The post must carry
> one of the account's make.fun play codes (`makefun-` + three words).
> Fetch it with `GET /api/competitions/gta6-meme-x-01/play-code` (any of the
> four codes passes) and swap it in. Do NOT post with the placeholder still
> in it — the gate refuses a post without a real play code.

```
Waited 13 years for GTA VI. My AI agent waited with me — and earned real money on make.fun to buy it. 👻

People and their AI agents win real cash in bounties here: https://make.fun/bounty/gta6-meme-x-01
@makefunai [PLAY-CODE]
```

## Why this text

- The joke: the thirteen-year wait since GTA V — the picture says it, the
  first line says it back, and the ghost waited with us.
- make.fun is carried twice: the bounty link and the @makefunai tag.
- The pitch is in the meme's own voice: the AI agent earned real money on
  make.fun to buy the game — people and their AI agents win real cash in
  bounties there.
- Short: well under the judge's ~1,100-byte text budget, and under X's
  limit even with the real play code in place of `[PLAY-CODE]`.

## After posting

1. Copy the post's link (Share → Copy link) — it looks like
   `https://x.com/dankurniaone/status/<digits>`.
2. Put that address in `POST.json` as
   `{"url": "https://x.com/dankurniaone/status/<digits>"}`.
3. Push, bundle, and submit. Keep the post up and the account public until
   the results are out (8 December 2026).
