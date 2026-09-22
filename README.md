# Maya Reynolds, PsyD — Multi-Page Homepage Clone & Redesign

Built for the Grow My Therapy Stage 2 internship assignment.

- **Part 1** clones the layout/structure of conejovalleycounseling.com
- **Part 2** redesigns it as a full multi-page site using Dr. Maya Reynolds'
  profile as the single source of truth (new theme, typography, copy, and
  images throughout)
- **Part 3** adds a dedicated "Our Office" page using her real office photos

## Site map
- `/` — Home
- `/about` — Full bio
- `/services` — Specialties index → `/services/[slug]` for each specialty
  (Anxiety & Panic, Trauma & EMDR, Burnout & Perfectionism, Life Transitions
  & Self-Trust, Relationship Patterns)
- `/methods` — Methods index → `/methods/[slug]` for each modality (CBT,
  EMDR, Mindfulness-Based Practice, Body-Oriented Therapy)
- `/office` — Our Office (new section, not in the original template)
- `/faq` — FAQ accordion
- `/contact` — Contact form (front-end only demo; wire up a form service
  like Formspree or a serverless function before using this for real)

All specialty/method copy lives in one place: `lib/content.js` — edit it
there and every page that references it updates automatically.

## Design
- Palette: deep forest-teal (ink), warm alabaster background, muted clay/rust
  accent, dusty sage secondary
- Type: Cormorant Garamond (serif, editorial) for headings, Work Sans for body
- Hover states, underline animations, and image zoom throughout for a more
  polished, less templated feel

## Tech stack
Next.js 14 (App Router) + Tailwind CSS.

## 1. Run it locally

```bash
npm install
npm run dev
```

Runs on http://localhost:5050 (set in package.json — change the `-p 5050`
flag in the `dev`/`start` scripts if you want a different port).

## 2. Push to GitHub

```bash
git init
git add .
git commit -m "Multi-page homepage clone + redesign for Dr. Maya Reynolds"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## 3. Deploy live (Vercel)

1. Go to https://vercel.com and log in with GitHub
2. **Add New → Project** → import the repo you just pushed
3. Leave settings as default → **Deploy**
4. You'll get a live URL like `maya-reynolds-therapy.vercel.app`

## 4. Recording the 5-minute Loom video

1. **(30s) Intro** — "Hi Dr. Reynolds, here's the first draft of your new site."
2. **(1.5 min) Desktop walkthrough** — Home → About → Specialties (open one
   detail page) → Methods (open one detail page) → Office → FAQ → Contact.
3. **(1.5 min) Explain design choices** — palette/typography fit for a calm,
   modern therapy brand; every specialty/method page pulled directly from
   her profile; mention this is now a full site, not a single page, so it's
   easier for her to add new specialties later.
4. **(1 min) Mobile walkthrough** — show the mobile menu working.
5. **(30s) Wrap** — invite feedback, mention the contact form needs a real
   backend connected before going live.

## Notes on content sourcing
- All copy is paraphrased/rewritten from Dr. Maya Reynolds' profile
  document, with two extra specialty pages (Life Transitions & Self-Trust,
  Relationship Patterns) and the FAQ answers written to reasonably extend
  what her profile implies — these are marked clearly so you can revise
  them with her actual answers before publishing for real.
- Office photos in `/public/images/office-1.jpg` and `office-2.jpg`, and her
  headshot in `/public/images/maya-headshot.png`, are her real provided
  images. The Office section now also appears directly in the homepage
  flow (not just its own page), using these same real photos.
- Every other image on the site is custom-built vector art
  (`components/ArtPanel.jsx`), drawn only from the site's exact color
  palette and designed per-section to represent that section's meaning
  (e.g. concentric "breathing" rings for Anxiety, a shield motif for
  Trauma/EMDR). This replaces the earlier placeholder stock photography —
  it guarantees every image is on-brand and intentional rather than an
  arbitrary stock photo. Swap these for real licensed photography later if
  you'd prefer photographic imagery once you have a budget for it.
# therapist-website
