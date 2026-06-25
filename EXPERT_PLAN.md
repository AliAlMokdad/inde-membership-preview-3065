I have read all four files in full. The memos are accurate against the code. Note one correction I caught: the nav breakpoint is 940px (style.css:426), not 940/940 as one memo implied, and there is no `.lang-btn` in the live HTML (the CSS rule is dead, lower priority). Also the winter image is genuinely above the fold and the `aria-current="true"` token is valid (so I will not chase that). Here is the merged plan.

---

# InDe Membership page â€” lead-engineer implementation plan

All three memos converge on the same high-value moves. De-duplicated, conflicts resolved, grouped by priority.

## P0 â€” do now (legitimacy, SEO, correctness)

### 1. Kill the "design showcase" footer disclaimer (the #1 trust killer)
`index.html:368`. It tells a live visitor the page is a mockup and references "Prices" the page does not show. Replace the whole `<p>`:
```html
<p>InDe is a volunteer led non-profit association. CVR 44906589. Services marked "Building now" are being set up, and we are honest about what is live today. Copenhagen, active across Denmark.</p>
```
Confidence 97.

### 2. Fix the broken join path (the conversion leak)
Five "act" buttons dump the user on the bare homepage in a new tab. Point every join/act CTA to the same real destination used by Silver/Platinum.
- `index.html:189` Free "Join free": change `href="https://in-de.dk" target="_blank" rel="noopener"` to `href="https://in-de.dk/contact/" target="_blank" rel="noopener"` (or the real signup URL if one exists)
- `index.html:246` "Offer your time": same change
- `index.html:258` "Partner with us": same change
- `index.html:326` "Become a member": same change

Use `https://in-de.dk/join/` instead if that route exists; otherwise `/contact/` matches the existing model. Confidence 90.

### 3. Add Open Graph + Twitter + canonical (currently zero social tags)
`index.html`, insert after line 8. Confirm the real canonical path before ship.
```html
<link rel="canonical" href="https://in-de.dk/membership/" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="InDe, Internationals of Denmark" />
<meta property="og:title" content="Membership for internationals in Denmark | InDe" />
<meta property="og:description" content="Join free for events, networking, and a voice. Add Silver or Platinum for coaching, contract checks, and your own Denmark Buddy." />
<meta property="og:url" content="https://in-de.dk/membership/" />
<meta property="og:image" content="https://in-de.dk/assets/img/hero-summer.jpg" />
<meta property="og:image:alt" content="A Copenhagen canal lined with red-roofed houses in summer." />
<meta property="og:locale" content="en_DK" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Membership for internationals in Denmark | InDe" />
<meta name="twitter:description" content="Join free. Add a level when you want deeper support. Run by volunteers and partners." />
<meta name="twitter:image" content="https://in-de.dk/assets/img/hero-summer.jpg" />
```
Confidence 96.

### 4. Add Organization (NGO) + FAQPage JSON-LD
`index.html`, before `</head>` (line 16). This is the lever that out-ranks unions. Do NOT add Offer/price schema (no prices is intentional).
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NGO",
  "name": "InDe, Internationals of Denmark",
  "alternateName": "InDe",
  "url": "https://in-de.dk/",
  "logo": "https://in-de.dk/assets/brand/apple-touch-icon.png",
  "description": "A membership organisation for internationals in Denmark and the Danes who welcome them.",
  "foundingDate": "2024",
  "areaServed": "DK",
  "email": "info@in-de.dk",
  "sameAs": [
    "https://www.linkedin.com/company/inde-internationalsofdenmark",
    "https://www.facebook.com/indedenmark/"
  ],
  "identifier": { "@type": "PropertyValue", "propertyID": "CVR", "value": "44906589" }
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Is InDe membership free?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Anyone can join free and belong from day one. Silver and Platinum add deeper one to one support, and you start with a free call, no cost and no pressure." } },
    { "@type": "Question", "name": "Who can join InDe?",
      "acceptedAnswer": { "@type": "Answer", "text": "Every international who makes Denmark home, of any nationality and in any city, and the Danes who welcome them." } },
    { "@type": "Question", "name": "What is a Denmark Buddy?",
      "acceptedAnswer": { "@type": "Answer", "text": "A real person who has lived in Denmark a while, matched to you, to help you settle. Part guide, part friend, part local ambassador." } },
    { "@type": "Question", "name": "What does Building now mean?",
      "acceptedAnswer": { "@type": "Answer", "text": "Some services are live today and some are still being set up. Each service says which, so you always know what is real right now." } },
    { "@type": "Question", "name": "How is InDe funded?",
      "acceptedAnswer": { "@type": "Answer", "text": "The community runs on people, not fees. Most of what InDe does is delivered by volunteers and funded by partner organisations." } }
  ]
}
</script>
```
Note: the visible page must contain these answers for FAQPage to be valid. The FAQ section in P1 #8 supplies them. If you ship the schema without the visible FAQ, drop the JSON-LD or Google may flag it. Confidence 93.

### 5. Tighten the `<title>`
`index.html:6`. Front-load the query phrase, drop the orphan period.
```html
<title>Membership for internationals in Denmark | InDe</title>
```
Confidence 78.

### 6. Add `rel="noopener"` partner is fine, but fix the marquee partner over-claim
`index.html:111` and `:118`. "Working alongside" + 11 named orgs is an implied partnership/endorsement claim, which is exactly the honesty boundary the rest of the page respects. Only keep names that are confirmed relationships. If any are aspirational, change the label at line 111 (and the sr-only at 118) to a defensible framing:
```html
<p class="trust-label">Internationals in Denmark are served by a wider community, including</p>
```
Action for Ali: confirm each of the 11 is real, or soften the label. Confidence 80.

### 7. Delete dead/conflicting CSS
- `style.css:408` `.foot-cols h4 { ... }` â€” no `<h4>` in markup (footer uses `.foot-h` on `<h2>`); the live rule is `.foot-h` at line 575. Delete the 408 block.
- `style.css:308-309` `.badge-tier` / `.badge-tier.member` â€” JS emits `lvl-chip`, not `badge-tier`. Delete.
- `style.css:370` `.tier-fine` â€” no matching markup. Delete.

Confidence 85.

## P1 â€” high value

### 8. Add a compact FAQ section (matches every benchmarked union; powers #4)
Insert before the Join CTA, after `index.html:318` (after the `voice` section, before `<!-- JOIN / CTA -->`). Plain warm English, no em dashes. Make the visible copy match the JSON-LD answers in #4.
```html
<!-- FAQ -->
<section class="faq" id="faq">
  <div class="wrap">
    <header class="sec-head reveal">
      <p class="kicker">Good to know</p>
      <h2>Questions people ask first.</h2>
    </header>
    <div class="faq-grid">
      <details class="faq-item reveal"><summary>Is InDe membership free?</summary>
        <p>Yes. Anyone can join free and belong from day one. Silver and Platinum add deeper one to one support, and you start with a free call, no cost and no pressure.</p></details>
      <details class="faq-item reveal"><summary>Who can join?</summary>
        <p>Every international who makes Denmark home, of any nationality and in any city, and the Danes who welcome them.</p></details>
      <details class="faq-item reveal"><summary>What is a Denmark Buddy?</summary>
        <p>A real person who has lived here a while, matched to you, to help you settle. Part guide, part friend, part local ambassador.</p></details>
      <details class="faq-item reveal"><summary>What does Building now mean?</summary>
        <p>Some services are live today and some are still being set up. Each service says which, so you always know what is real right now.</p></details>
      <details class="faq-item reveal"><summary>How is InDe funded?</summary>
        <p>The community runs on people, not fees. Most of what InDe does is delivered by volunteers and funded by partner organisations.</p></details>
    </div>
  </div>
</section>
```
Minimal CSS to append to `style.css`:
```css
.faq { padding-block: clamp(56px, 8vw, 100px); }
.faq-grid { display: grid; gap: 12px; max-width: 80ch; }
.faq-item { background: var(--sand-50); border: 1px solid var(--line); border-radius: var(--r-md); padding: 4px 22px; }
.faq-item summary { font-family: var(--font-display); font-size: 19px; color: var(--teal-900); cursor: pointer; padding: 16px 0; list-style: none; }
.faq-item summary::-webkit-details-marker { display: none; }
.faq-item summary::after { content: "+"; float: inline-end; color: var(--coral-500); font-weight: 600; }
.faq-item[open] summary::after { content: "â€“"; }
.faq-item p { font-size: 15px; color: var(--ink-soft); padding-block-end: 18px; }
```
Confidence 82.

### 9. Trim the service-card meta from three rows to one (highest-volume clutter)
36 dense rows across 12 cards is the most clutter on the page. Keep "Who it is for" (helps self-selection); drop "Format" and "Delivered by".
- `js/app.js:70-72`: remove the two `metaRow` calls for `"monitor"`/"Format" and `"hand-heart"`/"Delivered by", keeping only the `user-check`/"Who it is for" row.
- `js/data.js`: the `format` and `delivery` keys can stay (unused) or be removed; removing keeps the file honest. Low risk either way.

Confidence 70.

### 10. Cut the "How it works" section (duplicates tiers + flagship + give-back)
`index.html:264-294`. Step 1 = Free tier, step 3 = Denmark Buddy, step 4 = give-back. By the time the reader reaches it they have seen all of it. Remove the section. Optionally delete the now-unused `.how`/`.steps`/`.step*` CSS at `style.css:328-337`. Confidence 70.

### 11. Surface one truthful InDe number in the hero facts
`index.html:88`. Fact 3 ("Free / run by volunteers") is a marketing line dressed as a stat, sitting oddly beside "50% leave." Replace with a real self-proof point (the thing unions lead with). Use a number Ali can stand behind:
```html
<li><strong>Since 2024</strong><span>a member led community, growing across Denmark</span></li>
```
If a real count exists (members, events held, buddies matched), use that instead. Confidence 80.

### 12. One verb for the primary join action
Four labels for one action. Standardize on "Join free".
- `index.html:53` nav: `Join InDe` â†’ `Join free`
- `index.html:82` hero primary: `Become a member, it is free` â†’ `Join free`
- `index.html:326` join section: `Become a member` â†’ `Join free`

(Free-tier button at 189 already says "Join free.") Confidence 78.

### 13. Soften the bare "like a union" hero claim
`index.html:79`. A union has legal standing; the page elsewhere says it is "not your lawyer," so "Like a union, but for your whole life here" slightly over-claims. The safer phrasing already lives at `data.js:47`. Rewrite the hero lede:
```html
InDe is a membership organisation for internationals making Denmark home, and the Danes who welcome them. Join free to belong from day one. Add a level when you want deeper, one to one support.
```
Also at `data.js:47`, soften "people who never had access to one" (internationals can join Danish unions) to: `"...and opens it to internationals who often miss it."` Confidence 78.

### 14. Replace the final-CTA backward link
`index.html:327`. "Look again at Denmark Buddy" sends people back up at the moment of closing. Replace with a forward action matching the tier CTAs:
```html
<a class="btn btn-ghost btn-lg" href="https://in-de.dk/contact/" target="_blank" rel="noopener">Book a free call</a>
```
Confidence 72.

## P2 â€” polish

### 15. Cut the "Scroll" indicator
`index.html:102-105` + `style.css:227-229`. A scroll prompt on an obviously long page is filler with an infinite animation. Remove the block and its CSS. Confidence 68.

### 16. Calm the hero motion: drop the third orb
`index.html:68` + `style.css:193`. Three blurred orbs compete with the seasonal crossfade (which earns its place by literally illustrating "in every season" â€” keep that). Remove `orb-3` and its rule for a calmer, more premium hero. Confidence 70.

### 17. Image weight (real Core Web Vitals win, when assets allow)
Eight 1024px JPEGs (hero 1024Ã—1024 shown in a 5/4 box; pillars 1024Ã—704 shown ~1100px). Convert to WebP at displayed size and add `sizes`. Expect 300â€“600KB â†’ 40â€“80KB each. Largest single perf lever, but needs an image pipeline so it sits in P2. The winter hero (`index.html:95`) is effectively above the fold despite `loading="lazy"`; if you keep the crossfade it will pop in mid-loop on slow links, so either preload it or accept the fade. Confidence 85 on the diagnosis, lower on effort fit.

### 18. Drop "and priority booking" from the Silver tier
`index.html:202`. "Priority booking" is never defined in any service card, so a reader who clicks through finds a feature that does not exist on the page. Change to `First Year Companion`. Confidence 68.

### 19. De-duplicate the Member Voice / Policy Agenda copy
`data.js:173` repeats the Voice section's explanation (`index.html:303`) almost verbatim. Let the Voice section own the full explanation; tighten the data.js get-text:
`"Tell us what is broken and it feeds InDe's Policy Agenda. You can help shape it, and stand for a role."` Confidence 70.

---

## Verdict

With P0 plus the FAQ, the InDe page beats the Lederne/DjÃ¸f/IDA/AKA service pages: it matches their two trust engines (an FAQ and a self-proof number) while keeping a more premium design, a genuinely more credible honesty model, and a wedge none of them have in the Denmark Buddy. The single most important change is #1, deleting the "design showcase" disclaimer, because no amount of SEO or polish matters while the page openly tells visitors it is a fake; right behind it, #4 (Organization + FAQPage JSON-LD) is what actually wins the search result against the unions.
