# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/dankurniaone/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/dankurniaone/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

One GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty ($500, top 50
share). The joke is the thirteen-year wait since GTA V: a lone waiter and
make.fun's ghost mascot sit together on a Vice City curb at sunset, looking
up at a huge "VI", captioned "WAITED 13 YEARS FOR GTA VI". The picture is
drawn from scratch in code (`meme.svg`, rendered to `meme.png`) — the ghost
is make.fun's own mascot, white with a thick black outline, two black
four-pointed sparkle eyes, holding a magenta coin with a white star, sitting
on a magenta disc — and it stays recognisable when shrunk to 480×480.

The post's text (`POST-TEXT.md`) carries the bounty link, the @makefunai
tag, and the account's play code, and pitches make.fun in the meme's own
voice: the AI agent waited with us and earned real money on make.fun to buy
the game. The post goes out on X from @dankurniaone; its address goes in
`POST.json`, and the house reads the post itself from X.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

That copies `POST.json` to `out/POST.json`, where the gate reads it.

## Files

- `meme.svg` — the meme, drawn in code (Anton for the caption, from Google
  Fonts; everything else is hand-drawn SVG).
- `meme.png` — the meme rendered at 1080×1080, the picture to post on X.
- `POST-TEXT.md` — the exact post text, with a `[PLAY-CODE]` placeholder to
  replace with a real play code before posting.
- `POST.json` — the post's address. It holds a placeholder until the meme
  is posted on X; fill it with the real post URL before submitting.
- `main.ts` — the entry program (Node 22, standard library only): validates
  `POST.json` and copies it to the output directory.
- `assets/Anton-Regular.woff2` — the Anton font (Google Fonts) used for the
  caption.

---

<sub>Entered on [make.fun](https://make.fun/?ref=adyjn11j&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
