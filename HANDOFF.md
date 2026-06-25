# InDe Membership page — HANDOFF

For the next Claude session (Ali is switching Claude accounts; this device's CLAUDE.md, decision-log, and memory all persist regardless of account). Read this first.

## What this is
The **Membership / services page** for **InDe (Internationals of Denmark)**, in-de.dk, a real Danish non-profit membership association (CVR 44906589, founded 2024). Ali is building InDe's services with them. The page is meant to slot into in-de.dk as the "Membership" tab and to be **better than the best Danish union / a-kasse service pages** (lederne.dk, aka.dk, djoef.dk, ida.dk), with a legitimate, premium, simple vibe.

## Where / how
- Folder: `Desktop\experminting with claude\inde-services\` — vanilla static HTML/CSS/JS, **no build step**.
- Preview: Claude Preview server **"inde-services" on port 3496** (`.claude\launch.json`). Full-path python http.server (the path has spaces, so npx http-server breaks).
- Files: `index.html`, `css/style.css`, `js/app.js`, `js/data.js`, `assets/brand/` (real logo + favicons + `BRAND.md`), `assets/img/` (FLUX illustrations). Saved thinking: `MASTER_SPEC.md`, `STRATEGY_MEMOS.md`, `EXPERT_PLAN.md`. Reference-only: `direction-a-harbour/`, `direction-b/`, `direction-c/` (earlier design prototypes; ignore).

## IMMEDIATE NEXT TASKS (Ali's last two requests, not yet done)
1. **Remove the LinkedIn URL with `?originalSubdomain=dk` "in top."** The footer LinkedIn href is ALREADY the clean form (`https://www.linkedin.com/company/inde-internationalsofdenmark`, no tracking param), and there is no LinkedIn link in the header/nav. So clarify with Ali exactly where he saw the `?originalSubdomain=dk` version (it may be on the real in-de.dk site, or his clipboard) and ensure no link carries that param.
2. **Keep "Join InDe / Join free" scrolling to the `#tiers` Membership section.** Ali pasted that tiers section and said "when someone clicks join inde it takes them here" — that is the current and desired behavior (nav `Join free` href is `#tiers`). Just confirm it stays.

## OPEN DECISIONS (Ali to confirm before deploying)
- The real join/contact URL (currently all join CTAs point to `https://in-de.dk/contact/`) and the canonical path (assumed `https://in-de.dk/membership/`).
- That all 11 partner names in the marquee are current relationships (label was softened to "We collaborate and co-host with").
- The freemium model + buddy mechanics (buddies = Supporters/volunteers, Denmark Buddy = Platinum flagship). Prices are deliberately not shown (book a free call).
- Deploy target: it is a static page. Embed in their Umbraco site or hand over the files.

## HARD RULES (do not break)
- Identity = InDe's **real red + white** (Danish flag): red `#C8102E`, bordeaux `#7A1019`, ink `#2A1A1C`, warm white `#FBF7F3`. The cyan on their current site is template leftover, NOT brand. Logo is the animated 2x2 red-tile SVG.
- Voice: plain warm English, **NO em dashes**, no fluff, honest (no fake numbers/testimonials). English only.
- Illustrations over crowds of people (Ali preference).
- Free assets only (Google Fonts, Cloudflare FLUX for art, inline SVG icons).

## State
Built and live-verified: 0 console errors, no horizontal overflow, both JSON-LD blocks (NGO + FAQPage) parse valid, images optimized (~567 KB total for the 7 used). NOT pushed to GitHub, NOT deployed to in-de.dk yet. It is a local showcase/prototype Ali iterates on.

## History (decision-log)
- #617 InDe studied (org profile). #622 v1 showcase built (red identity). #623 v2 (membership ladder + Denmark Buddy + seasonal hero, English only). #624 expert pass (SEO + simplification + legitimacy: removed prices -> book a free call, added CVR by social, NGO/FAQPage JSON-LD, FAQ section, image optimization). Workflows run: `wgl8sbjkt` (strategy+design), `w64gv7pkz` (QA), `wic9mzvj5` (Google-design/SEO/UX + union benchmark + legitimacy expert pass).
