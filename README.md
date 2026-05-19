# BeesBridge website — deploy bundle

Drop these files into the root of the `muksaw.github.io` repo (or whichever repo serves `www.beesbridge.us` from GitHub Pages).

## What's in this bundle

```
index.html              ← main page
styles.css              ← stylesheet
script.js               ← nav, reveal, counters, particles, parallax
assets/                 ← logo, founder photos, partner logos
CNAME                   ← tells GitHub Pages to serve www.beesbridge.us
.nojekyll               ← disables Jekyll so assets/ paths work as-is
```

## How to deploy

1. **Back up** the current repo first — `git checkout -b backup-before-redesign` and push it.
2. From the repo root, delete the current site files and copy these in:
   ```
   cp -R /path/to/this/bundle/. .
   ```
   (The trailing `/.` copies hidden files like `.nojekyll` too.)
3. Verify the `CNAME` file still contains `www.beesbridge.us`. If you want the apex (`beesbridge.us`) too, set it to just `beesbridge.us` and configure both A and CNAME records.
4. Commit and push:
   ```
   git add .
   git commit -m "feat: redesigned site with HelixCore, PSA, internal toolkit, case studies"
   git push origin main
   ```
5. GitHub Pages will rebuild in 30–60 seconds. Verify at `https://www.beesbridge.us`.

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
