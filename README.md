# InDe Membership

The membership page for **InDe, Internationals of Denmark** (in-de.dk), a member led non-profit association (CVR 44906589, founded 2024). It is built to slot into in-de.dk as the Membership tab.

The page leads with **The Living Flag**: an animated Danish flag (Dannebrog) whose four white letters **i, n, d, e** spell *inde*. On view the letters assemble into the wordmark, hold for a beat, then come alive as four little scenes, one per quadrant, before re-forming the letters and looping. The four lives are:

- **i** – people gathered in front of a Danish summer house
- **n** – two swimmers under the sun
- **d** – a person studying, with the spark of an idea
- **e** – a celebration with garland, balloons and cake

The figures stay strictly inside their own quadrant and never cross the white cross.

## Tech

- Plain static **HTML, CSS and vanilla JavaScript**. No build step, no framework.
- The Living Flag engine is `js/living-flag.js` (SVG plus GSAP from a CDN). It reads `window.INDE_FLAG_OPTS` and degrades gracefully: under `prefers-reduced-motion` it shows a clean static four-letter flag, and it pauses when scrolled off screen.
- Accessibility: the flag has a title and description, and the page uses semantic landmarks and reduced-motion support.

## Structure

```
index.html            the membership page (the Living Flag lives in the hero)
living-flag.html      the Living Flag on its own, full screen, for previewing
css/style.css         design system and page styles
js/living-flag.js     the Living Flag animation engine (drop-in)
js/app.js             page behaviour (reveal on scroll, pillar tabs, tally, nav)
js/data.js            the services and membership data
assets/brand/         the real InDe logo, favicons and brand notes
assets/img/           illustrations
```

## Preview

It is static, so any local server works. For example:

```
python -m http.server 3496
```

then open `http://localhost:3496/`.

## Identity

InDe's real brand is **red and white** (the Danish flag): primary red `#C8102E`, the brighter flag red `#F11414` on the Living Flag, deep warm ink `#2A1A1C`, warm white `#FBF7F3`. Display type is Fraunces, body is Inter, civic labels are IBM Plex Mono. The Living Flag uses Source Sans Pro.

## Status

A working prototype, iterated locally. Not yet deployed to in-de.dk.
