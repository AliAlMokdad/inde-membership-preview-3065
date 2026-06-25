# InDe brand assets and identity (extracted from in-de.dk)

Source: the live InDe logo + their compiled stylesheet (/dist/main.css), pulled 2026-06-24.

## Logo
- `indelogo1000x1000.png` (954x623) — primary mark: a 2x2 grid of rounded red tiles, white letters i / n / d / e. Evokes the Danish flag (red + white).
- `smalllogo.png` — small/nav mark.
- `apple-touch-icon.png`, `favicon-32x32.png`, `favicon-16x16.png` — icons.

The 2x2 rounded-tile grid is InDe's signature visual device. Reuse it (cards, pillar grid, section motifs).

## Real identity colors (USE THESE)
Extracted from the logo and from main.css custom rules:
- Primary red (Danish flag / Dannebrog): `#C8102E`  (main.css `.gradient` end)
- Deep red (depth, hovers, gradient start): `#8B0000`  (main.css `.gradient` start)
- Logo tile red (vivid, for exact logo-matching tiles): `#F11414`  (sampled from logo)
- Secondary green (their `.green` button color, use sparingly): `#3B7A57`
- White `#FFFFFF` and neutral grays `#E5E7EB`, `#9CA3AF`.

Their `.gradient` = linear-gradient(90deg, #8B0000, #C8102E).

## NOT part of the identity
- Cyan `#6EC1E4` and the blue gradient are leftovers from the free Tailwind landing-page template they launched on. Do not treat as brand. (Their `.blue-gradient` = linear-gradient(180deg,#6ec1e4,#fff 100px), template default.)

## Typography on current site
- Source Sans Pro (Google Fonts). We may elevate the display font while keeping a clean, readable body.

## Voice
Plain, warm, welcoming English. No marketing fluff. No em dashes. Honest (real civic org, no fake numbers or testimonials).
