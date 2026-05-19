# BeesBridge website

## What's in this bundle

```
index.html              ← main page
styles.css              ← stylesheet
script.js               ← nav, reveal, counters, particles, parallax
assets/                 ← logo, founder photos, partner logos
CNAME                   ← tells GitHub Pages to serve www.beesbridge.us
.nojekyll               ← disables Jekyll so assets/ paths work as-is
```


## Notes

- The site is **pure static HTML/CSS/JS** — no build step, no Node, no Jekyll.
- `script.js` uses no external libraries (only Google Fonts via CDN).
- `assets/logos/*` and `assets/award-*` are referenced from the HTML — keep that folder structure.
- The Loom video in the Toolkit section embeds via iframe — works out of the box, no API key.
- The contact form is currently demo-only (`event.preventDefault()`). To make it live, wire it to Formspree, Netlify Forms, or a simple Apps Script endpoint. Happy to do this if you want.

## Things you may want to update later

- Replace founder initial circles with real headshots (already done for Venkat &amp; Mohit).
- Add real customer/partner logos as you sign new ones.
- If/when HelixCore opens up beyond gated demos, update the CTA in `#helixcore`.
- The Premier case is referenced from publicly-presented Databricks event material — no shout-out is claimed.
