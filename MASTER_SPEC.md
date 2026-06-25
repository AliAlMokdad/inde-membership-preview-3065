The team has done strong work. The images already exist on disk. I have everything I need to write the master spec. This is a synthesis-and-decision task, so I'll produce the spec directly.

Looking at the assets: the available images map cleanly to a **navy + paper + amber/teal "Welcome" identity**, which is exactly the convergence point. Three of four design memos (Harbour navy/amber, Warm Institutional navy/teal/amber, plus the service-suite teal) all landed on the same core move: drop the template cyan, ground in navy/teal, warm with paper and amber. I'll blend Direction A (Warm Institutional, "The Welcome Desk") as the spine, take the lamp signature, take the journey-stage IA from the needs memo, and lock the 6-pillar backbone from the union memo.

Here is the master build spec.

---

# InDe Member Services â€” Master Build Spec
**Single source of truth for the showcase page build. Vanilla static HTML/CSS/JS, no build step.**
**Build location:** `inde-services/` root. Reuse images already on disk in `assets/img/`. The three `direction-*` folders stay as reference; the shipped page is the new root `index.html` + `css/style.css` + `js/app.js`.

---

## 1. POSITIONING

InDe is the membership organization for internationals and Danes building a more welcoming Denmark. Unions like Lederne, IDA, and DjÃ¸f serve one profession and quietly assume you already belong: you read Danish, you hold a stable permit, you have a network, your degree is recognized. Being international is not a profession, it cuts across every one of those assumptions, and it starts before you even have a job. So InDe does not compete with the unions. It sits next to them and owns what they cannot serve: arriving, finding work, knowing your rights, belonging, staying, and a collective voice that changes the rules. The job of this page is to turn a credible grassroots org into an institution-grade platform you would trust with your residence permit. It does that through radical honesty (every service labeled live or building, every delivery model named) rather than hype. One line: **free at the point of access, we walk with you, we have your back, and we work to change the system.**

---

## 2. SERVICE SUITE

Six pillars. Each service is tagged **NOW** (live, volunteer or existing partner), **NEXT** (one partner or a small grant away), or **HORIZON** (needs staff or funding). Free unless marked. Delivery named on every card. Nothing over-claimed.

### Pillar 1 â€” Navigate (find your way through the system)
*The international-specific answer to "personal advice." Things no Danish union covers because Danes never need them.*

| Service | Promise | What you get | Who it's for | Format | Delivery | Tier |
|---|---|---|---|---|---|---|
| **First-Year Wayfinder** | A clear path through your first months, in plain language | A step-by-step guide to CPR, MitID, tax, bank, Digital Post, with the official links and a person to ask. We point you to International House for the paperwork itself | Newcomers in months 1 to 12 | Digital guide + peer Q&A | Volunteers, signposts to public services | NEXT |
| **Permit and Safety-Net Clinic** | Understand what your permit means before you need to | Plain-language help on permit renewal, the job-seeking window after a layoff, and whether a-kasse actually protects your permit type. We guide, we do not represent you legally | Non-EU members, anyone facing renewal or job loss | Group drop-in + 1:1 | Trained volunteers + pro-bono legal partners | HORIZON |

### Pillar 2 â€” Work (thrive in the Danish labour market)
*Job-search support, career sparring, and salary tools, rebuilt for someone with no Danish network.*

| Service | Promise | What you get | Who it's for | Format | Delivery | Tier |
|---|---|---|---|---|---|---|
| **Career Sparring** | Sharpen your CV and your story for Danish employers | 1:1 sessions on CV, application, LinkedIn, and interview practice | Job-seeking members at any stage | 1:1 + clinics | Volunteer coaches + partner advisers | NOW |
| **Warm-Referral Network** | Reach the jobs that are never posted | Structured member-to-member introductions, because most roles here come through network, not adverts | Members breaking into the market | Member network + events | Member-powered + partners | NEXT |
| **Partner Career Track** | Your spouse counts here too | A dedicated track for accompanying partners, the group most likely to leave: peer cohorts, sector reintroduction, restart coaching | Accompanying spouses and partners | Group + 1:1 | Volunteers + pro-bono coaches | NEXT |
| **Pay and Negotiation Lab** | Walk into the salary talk knowing your worth | Danish salary context for your role plus a simple negotiation script. Built only when the data is honest, never guessed | Members negotiating an offer or raise | Workshop + tool | Partner data + volunteer coaches | HORIZON |

### Pillar 3 â€” Rights (clarity before you sign)
*The kontrakttjek, made understandable to a newcomer.*

| Service | Promise | What you get | Who it's for | Format | Delivery | Tier |
|---|---|---|---|---|---|---|
| **Contract and Rights Check** | A friendly first look before you commit | A plain read of your employment contract against Danish norms, and your basic rights explained. A clear starting point, not legal representation | Anyone signing or questioning a contract | 1:1 review | Pro-bono legal and HR volunteers | NEXT |
| **Credential Wayfinder** | Make your foreign degree count here | Find out if your profession is regulated, which authority to contact, and how to use the free public assessment | Members with degrees earned abroad | Guided tool + clinic | Volunteers, routes into the free public system | HORIZON |

### Pillar 4 â€” Learn (skills, culture, and starting something)
*Workshops InDe already runs, formalized into a calendar.*

| Service | Promise | What you get | Who it's for | Format | Delivery | Tier |
|---|---|---|---|---|---|---|
| **InDe Workshops** | Practical sessions that help you stay and grow | The Danish workplace, unwritten rules, the system explained, AI literacy, and skills | All members | Group + recorded | Volunteer and partner trainers | NOW |
| **Founder Track** | Help to start something here | Guidance on registering a company as an international and finding the existing free startup support | Aspiring founders | Group + sparring | Volunteers + startup partners | NEXT |

### Pillar 5 â€” Belong (community and wellbeing)
*InDe's strongest existing muscle, and the answer to the retention problem.*

| Service | Promise | What you get | Who it's for | Format | Delivery | Tier |
|---|---|---|---|---|---|---|
| **InDe Meetups** | Real rooms, real people, nationwide | The existing InDe Meetup and InDe Connect events that bring internationals and Danes together | Everyone | Events | Volunteer team + host partners | NOW |
| **Welcome Buddy** | Someone who arrived before you, beside you | Matched with a volunteer, a settled international or a Dane, who guides you through your first months | Newcomers and anyone feeling alone | 1:1 pairing | Volunteer mentors | NEXT |
| **Wellbeing Circle** | The quiet weight of moving country, shared | Small peer-support groups and clear signposting to professional help. Peer support, not therapy | Members feeling isolated or stretched | Group + referrals | Trained volunteers + referrals | HORIZON |

### Pillar 6 â€” Be Heard (a voice in the rules)
*What no a-kasse offers internationals.*

| Service | Promise | What you get | Who it's for | Format | Delivery | Tier |
|---|---|---|---|---|---|---|
| **Member Voice** | Your experience changes what we push for | Surveys, forums, and the annual assembly feed InDe's 8-point Policy Agenda, carried to the people who can fix the barriers | Every member | Surveys + forums + assembly | InDe advocacy + members | NOW |

**Tally for the build: 14 services across 6 pillars. NOW: 4 (Career Sparring, InDe Workshops, InDe Meetups, Member Voice). NEXT: 6. HORIZON: 4.**

**Tiers (honest, free-first):** Member is free and stays free, every core service at the point of access. Supporter is an optional donation that funds the org, never gates a basic service, and only ever buys deeper 1:1 time. Label Supporter as a planned way to give back, not a paywall.

---

## 3. PAGE IA (ordered sections + exact copy)

> Voice: plain, warm, short sentences. **No em dashes anywhere.** Periods and commas only. Built to translate cleanly to Arabic, Farsi, Urdu later.

**0. Nav (sticky).** Brand wordmark "InDe" + nav: Services Â· How it works Â· Membership Â· Partners Â· About. One amber CTA pill: **Join InDe, it's free**. Theme toggle. Mobile: hamburger drawer.

**1. Hero.** Purpose: state who InDe is and the emotional promise in 3 seconds.
- Eyebrow (mono): `MEMBERSHIP FOR INTERNATIONALS IN DENMARK`
- Headline: **Belong in Denmark. Grow with people who get it.**
- Subhead: *InDe is a membership community for internationals and Danes who want a more welcoming Denmark. We help you find work, know your rights, build a network, and feel at home. Membership is free.*
- Primary CTA: **Join InDe, it's free** Â· Secondary text link: **See what members get**
- Visual: `hero-people.jpg` (the welcome-desk scene), with the lamp signature overlay (section 6).

**2. Value proposition.** Purpose: name the problem and InDe's role. One paragraph.
- Intro line: **Support for your whole life in Denmark, not just your first week.**
- Body: *Moving to Denmark is a lot to carry alone. A new job market, a new language, contracts you have not seen before, and a system that takes time to learn. The best Danish membership organizations give their members real support for all of this, in Danish, for people who already belong. InDe brings that same kind of support to internationals, in plain language, with people who have been where you are. Most of it is free, run by volunteers, partners, and pro-bono experts who want you to thrive here.*

**3. Honest stat band.** Purpose: trust through real, cited facts (count-up animation).
- `1 in 5` â€” *people in Copenhagen is an international.*
- `about 50%` â€” *of international professionals leave within five years. We want to change that.*
- Small caption under the band: *Figures from public data and the Copenhagen Capacity Expat Survey. These are the world InDe works in, not InDe's own metrics.*

**4. The six pillars.** Purpose: the mental model. Six pillar cards, each opening its service group.
- Section eyebrow (mono): `WHAT MEMBERSHIP GIVES YOU`
- Section title: **Six ways InDe walks with you.**
- Pillar intros:
  - **Navigate** â€” *Find your way through CPR, permits, tax, and the parts no one explains.*
  - **Work** â€” *Reach the Danish job market, including the jobs that are never posted.*
  - **Rights** â€” *Understand your contract and your rights before you sign.*
  - **Learn** â€” *Build the skills and the cultural know-how to stay and grow.*
  - **Belong** â€” *Find your people, and someone to talk to when it is hard.*
  - **Be Heard** â€” *Turn your experience into change through our Policy Agenda.*

**5. Services grid.** Purpose: the full offering, honestly labeled. 14 cards from section 2, grouped by pillar, each with: icon, name, one-line promise, "what you get", delivery line, and a status chip (NOW / NEXT / HORIZON). A filter row at top: **All Â· Available now Â· Building** so visitors can see what is live today.
- Helper line above the grid: *Every service is labeled honestly. Available now means you can use it today. Building means we are setting it up with a partner or with funding.*

**6. How it works.** Purpose: lower the barrier. Three steps.
- Intro line: **Getting support is simple. Three steps, no cost.**
- Step 1. **Join.** *Sign up in a few minutes. Membership is free and open to internationals and Danes.*
- Step 2. **Pick what you need.** *Come to an event, book career sparring, or ask for a contract check.*
- Step 3. **Move forward.** *Meet people, get answers, and keep growing with the community around you.*

**7. Membership / CTA.** Purpose: convert, while staying free-first.
- Intro line: **One membership. A whole community behind you.**
- Body: *InDe membership is free, and it stays free. We are a non-profit run by volunteers and partners, funded by grants and goodwill, not by your wallet. Join to use the services, come to the events, and add your voice to the work of making Denmark more welcoming. If you ever want to give back, you can volunteer or become a supporter, but you never have to pay to belong.*
- Two tiers shown side by side: **Member Â· Free** (everything above) and **Supporter Â· Planned** (a way to chip in and keep it free for the next person, clearly marked planned).
- CTA: **Become a member**

**8. Trust line.** Purpose: institution-grade credibility, in the open.
- Intro line: **A real organization, built in the open.**
- Body: *InDe is a registered Danish non-profit association, CVR 44906589, founded in 2024 and led by volunteers. We will always tell you what we can help with, and when something is better handled by an official body or a partner. We do not give legal or immigration representation. We guide you and point you to the right official channel.*
- Mono civic chips: `FOUNDED 2024` Â· `CVR 44906589` Â· `FREE MEMBERSHIP` Â· `VOLUNTEER LED`

**9. Partners.** Purpose: borrowed credibility, real names only.
- Intro line: **We do not do this alone.** *We work with people and organizations who share the goal.*
- Names (calm row, no fake logos needed, set in clean type): Danes Worldwide, Copenhagen Capacity, The Copenhagen Post, Community House Copenhagen, AMIS, Alida, International House Odense, Roskilde Libraries, Dansk Industri, Professional Women of Color, BPOC.

**10. Closing band + footer.**
- Closing headline: **You do not have to figure Denmark out alone.**
- Subhead: *Join InDe today. Find your people, find your footing, and help build a Denmark that welcomes everyone.*
- CTA: **Join InDe, it's free**
- Footer: mission line *Together we create a welcoming Denmark.* + the three mission verbs **Represent Â· Support Â· Assist** + nav links + a clearly worded design-showcase note + GDPR/privacy line: *Conversations with coaches and buddies are confidential. We will say what data we keep and why.*

---

## 4. DESIGN SYSTEM

**Chosen direction: Direction A "The Welcome Desk" (Warm Institutional), blended with the Harbour navy/amber accent and the service-suite pillar structure.** Navy gives institutional gravity, paper gives warmth, teal carries care, amber is the human spark, and the old InDe cyan survives as a soft wash and as the lamp glow, demoted from a flat fill to a meaningful accent. Decisive, not hedged: navy + paper + amber is the identity.

### Color tokens

**Light (default):**
```
--bg:#F7F4EE  --surface:#FFFFFF  --surface-2:#EFEAE0
--ink:#16243A  --ink-2:#3F4D63  --muted:#6B7686
--primary:#1B3A5B  --primary-hover:#15304B
--secondary:#0E7C7B            /* teal, the "care" voice */
--accent:#1E9FD8               /* InDe blue, deepened for contrast (links, focus, UI) */
--accent-soft:#6EC1E4          /* original InDe cyan, washes/glow only, never text */
--warm:#E8924A                 /* amber, CTAs accents + NOW badges */
--success:#2F8F5B  --border:#E2DCD0  --border-strong:#C9C0B0
/* status chips */
--now:#2F8F5B  --next:#E8924A  --horizon:#6B7686
```
**Dark:**
```
--bg:#101824  --surface:#18222F  --surface-2:#202C3B
--ink:#ECE6DA  --ink-2:#B6BECB  --muted:#8590A0
--primary:#2C5A86  --secondary:#2BA6A2  --accent:#5BC2EE  --accent-soft:#6EC1E4
--warm:#F0B968  --success:#52C285  --border:#2A3645  --border-strong:#3C4A5C
--now:#52C285  --next:#F0B968  --horizon:#8590A0
```
Theme set before first paint via inline script reading `localStorage('inde_theme')` then `prefers-color-scheme`. Persist to `inde_theme`. (Proven ankommer pattern.)

### Typography (Google Fonts)
- **Display/headings:** Fraunces, weights 400/500/600, `font-optical-sizing:auto`, letter-spacing -0.02em on display.
- **Body/UI:** Inter, 400/500/600/700.
- **Civic micro-labels:** IBM Plex Mono, 500 only (eyebrows, CVR, status, stat figures).
- **RTL future:** `:lang(ar|fa|ur)` swaps to Noto Naskh Arabic (body) + Noto Kufi Arabic (display). Load on demand.

**Type scale (clamp, 1rem=16px):**
```
--fs-display: clamp(2.75rem,6vw,4.75rem)   Fraunces 500  lh1.04
--fs-h1:      clamp(2rem,4vw,3rem)         Fraunces 500  lh1.1
--fs-h2:      clamp(1.5rem,2.5vw,2rem)     Fraunces 500  lh1.15
--fs-h3:      1.25rem                       Inter 600     lh1.25
--fs-lead:    clamp(1.125rem,1.6vw,1.375rem) Inter 400  lh1.5
--fs-body:    1.0625rem (17px)              Inter 400     lh1.6
--fs-small:   0.9375rem                     Inter 400     lh1.5
--fs-eyebrow: 0.8125rem  IBM Plex Mono 500  ls0.12em  uppercase
```
Body measure capped 68ch, lead 46ch.

### Spacing scale (8px base)
`--s-1:4 --s-2:8 --s-3:12 --s-4:16 --s-5:24 --s-6:32 --s-7:48 --s-8:64 --s-9:96 --s-10:128` (px). Section rhythm uses s-9 to s-10.

### Radii
`--r-sm:8 --r-md:14 --r-lg:22 --r-pill:999`. Buttons 10px, except the hero CTA which is a pill (the matured nod to the old green pill). Institutions are not bubbly, keep it restrained.

### Shadow system (navy-tinted, warm, never pure black)
```
--e-1: 0 1px 2px rgba(22,36,58,.06), 0 2px 6px rgba(22,36,58,.05)   /* resting card */
--e-2: 0 4px 12px rgba(22,36,58,.08), 0 10px 24px rgba(22,36,58,.06) /* hover */
--e-3: 0 12px 32px rgba(22,36,58,.12), 0 24px 60px rgba(22,36,58,.10) /* signature panel */
/* dark: rgba(0,0,0,.4) + inset 0 1px 0 rgba(255,255,255,.04) for edge definition */
```
Cards: 1px `--border` + `--e-1` at rest; on hover lift -4px to `--e-2` with a 1px `--accent`-tinted border.

### Motion language
- Easing: `--ease-out: cubic-bezier(.16,1,.3,1)` (arrivals), `--ease: cubic-bezier(.4,0,.2,1)` (hovers).
- Hero intro: staggered rise+fade, 420ms/element, 90ms stagger; hero image fade+scale 0.98â†’1 over 700ms. Total under 1.1s. No splash.
- Scroll reveal: IntersectionObserver adds `.in`, fade up 24px, 560ms ease-out, 60ms per-card stagger via `--i`, rootMargin `0px 0px -12% 0px`.
- Hover: cards lift -4px / 220ms; buttons darken + nudge inline arrow 4px / 180ms; links draw underline (background-size) 260ms.
- Focus: instant 3px `--accent` outline, 2px offset (no transition).
- **Reduced motion:** wrap all of the above in `@media (prefers-reduced-motion:no-preference)`. Under reduce: full opacity, no transforms, and explicitly zero `animation-delay` AND `transition-delay` (the ankommer/sector-debrief lesson, or staggered items sit invisible). Lamp shows a static lit state, no flicker.

### Components
- **Buttons.** Primary: `--warm` fill, `--ink`-dark text (`#16243A`), 10px radius, hover darken + arrow nudge. Hero primary: same fill, pill radius. Secondary: ghost, 1px `--border-strong`, `--ink` text, hover `--surface-2`. Link: `--accent` + draw-underline, never color-only.
- **Cards.** `--surface` bg, 1px border, `--e-1`, `--r-md`, padding s-5/s-6. Header row: Lucide icon (1.75px stroke, `--ink-2` â†’ `--accent` active) + status chip top-right. Hover: lift + accent border + faint amber glow when the lamp "points" at it.
- **Status chips.** Pill, mono 0.72rem uppercase: NOW = `--now` text on tinted bg; NEXT = `--next`; HORIZON = `--horizon` outline. Always paired with the word, never color-only.
- **Nav.** `--surface` at scroll-top transparent over hero, solidifies to `--surface` + `--e-1` + 1px bottom border on scroll. Logical-property layout so it mirrors in RTL.
- **Layout.** 12-col, max 1200px content / 1320px hero, gutter 24px, outer padding `clamp(20px,5vw,64px)`. Cards `repeat(auto-fit,minmax(280px,1fr))`. **CSS logical properties everywhere** (margin-inline, padding-inline, inset-inline-start, border-inline-start) for zero-rewrite RTL.

---

## 5. ILLUSTRATIONS

**Reuse what is on disk first.** These map directly to the IA and are already generated in `assets/img/`:
- Hero â†’ `hero-people.jpg` (welcome-desk scene). Keep `hero.jpg` as alt.
- Navigate â†’ `compass.jpg` Â· Work â†’ `career.jpg` Â· Rights â†’ `legal.jpg` Â· Learn â†’ `grow.jpg` Â· Belong â†’ `belong.jpg` (or `community.jpg`) Â· Be Heard â†’ `advocacy.jpg`.
- Paper grain overlay â†’ `texture.jpg` at ~3% opacity, tiled, `aria-hidden`.

That covers the full page. **Only regenerate if a current image clashes with the navy/paper/amber palette.** If regeneration is needed, use these FLUX prompts (model `@cf/black-forest-labs/flux-1-schnell`, steps 8, 1024px, save JPEG, then Read to display). All share: *warm flat editorial illustration, limited palette of deep navy #1B3A5B + warm sand #F7F4EE + teal #0E7C7B + soft cyan wash + amber #E8924A spark, subtle paper grain, no text, no logos, dignified, generous negative space.*

1. **Hero â€” The Welcome Desk:** `...A calm welcome desk inside a bright Nordic public building, a person behind the desk leaning forward and another arriving with a small suitcase, large windows with soft daylight, a single amber desk lamp glowing, negative space on the right for a headline.`
2. **Navigate:** `...A person reading a simple folded map or signpost with clear arrows pointing toward a lit doorway, a small compass motif, calm and reassuring.`
3. **Work:** `...A neat still-life of a CV document, a small magnifying glass, a sprouting plant beside a laptop on a warm surface.`
4. **Rights:** `...A balanced set of scales beside a folded contract and a friendly hand pointing to a line on the page, reassuring not intimidating.`
5. **Learn:** `...A small group in a relaxed workshop around a table, one person at a simple easel-board, warm and collaborative.`
6. **Belong:** `...Several simple people-shapes connected by soft flowing lines into a loose warm constellation, sense of belonging.`
7. **Be Heard:** `...A diverse group around a round table in calm conversation, one person gesturing toward a window with a stylized city skyline, civic and hopeful.`
8. **Closing band:** `...Panoramic stylized Copenhagen street at golden hour, small calm figures of many kinds walking together toward an open lit doorway.`

**Icons:** Lucide, inline SVG, 1.75px stroke, 24px box, one literal icon per service (compass, shield-check / file-text, scale, briefcase, users / message-circle, heart-handshake, graduation-cap, rocket, megaphone, calendar, lightbulb, etc.). No icon font request.

---

## 6. SIGNATURE MOMENTS

1. **The lamp that lights when you arrive.** The hero carries a warm amber desk lamp. On load (no-preference only), it performs a one-time soft switch-on: a ~900ms glow bloom from the bulb, outer halo in the original InDe cyan `#6EC1E4` fading into amber at the core (radial-gradient scaling + fading opacity), with one barely-there 2-frame flicker before it settles. It reads as "someone just opened up and turned the light on for you." This is the literal reuse of the old cyan, given new meaning, and it is the emotional thesis of InDe in one animation. Built with one absolutely-positioned `.lamp-glow` div + layered radial-gradients + `@keyframes lampOn`. Degrades to a static lit lamp under reduced motion.

2. **The lamp follows your reading.** The same lamp becomes ambient: as you scroll into the services grid, the pillar or card currently in view catches a faint warm `--warm` box-shadow glow, as if the lamp is pointing at what you are looking at. Driven by the same IntersectionObserver as scroll-reveal (toggle a `--glow` custom prop per active card). 60fps, no canvas, no library.

3. **The honesty filter.** A single row of three toggles above the services grid: **All Â· Available now Â· Building.** Clicking animates the non-matching cards to a calm 0.35 opacity + scale 0.98 (NOT display:none, so the honesty is visible: you see how much is live versus building). This turns the radical-transparency rule into the most interactive, trust-building moment on the page. Keyboard operable, `aria-pressed` on toggles, announced via a polite live region.

---

## 7. REJECTED

1. **Keeping the cyan #6EC1E4 as the primary brand fill (and a flat blueâ†’green gradient hero).** Rejected because it is the single thing that makes the current site read as a free Tailwind template and "AI website," and white-on-cyan fails contrast. We keep the cyan as a recognizable thread (the lamp glow and soft washes) but anchor the identity in navy + paper so a grant officer or ministry takes InDe seriously.

2. **An always-on AI assistant chatbot as a headline feature.** Tempting given the ankommer BjÃ¸rn precedent, but rejected for this showcase: it implies a live capability InDe cannot yet honestly staff or moderate, it competes with the page's job (presenting the service suite), and it risks giving immigration-adjacent answers without the guardrail work. Better as a clearly-labeled HORIZON item later, not a hero feature now.

3. **Invented social proof: member testimonials, a live member counter ticking up, and partner logo walls.** Rejected outright per the honesty rule. We have no verified quotes, the 297 figure is small and would anchor low if animated in the hero, and we will not fake endorsement logos. Trust here is built by labeled honesty (NOW/NEXT/HORIZON), the real CVR and founding date, named delivery models, and only the two genuinely-sourced stats, which is a stronger institution-grade signal than manufactured proof.

---

This spec is decisive and complete. Build the shipped page as `inde-services/index.html` + `css/style.css` + `js/app.js`, reuse the on-disk images, and verify with Claude Preview (0 console errors, no overflow at 360px, reveals + count-ups + lamp + honesty-filter firing, RTL mirror via `dir="rtl"` smoke test, reduced-motion shows all content).
