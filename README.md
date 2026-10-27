# Amplify Digital Group: landing page

One-page site built with [Astro](https://astro.build). Static output; JavaScript is limited to scroll animations, the header and click-to-play Mux video.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

Deploys on Netlify from `netlify.toml` (build `npm run build`, publish `dist`).

## Where things live

| Change | File |
|---|---|
| All copy: hero, featured client result, services, steps, results, work, client stories, FAQ, contact | `src/data/site.ts` |
| Featured client result under the hero (the $80K video) | `featured` in `src/data/site.ts`, layout in `src/components/FeaturedCase.astro` |
| Structured data (schema.org) | `src/lib/schema.ts` |
| Page sections and their styles | `src/pages/index.astro` |
| Colors, fonts, spacing | `src/styles/global.css` (`:root` variables) |
| Logo | `public/brand/logo-320.webp`, `logo-640.webp` (made for dark backgrounds), `logo.png` (square, for schema) |
| Social share image, favicons | `public/og.png`, `public/favicon.*`, `public/apple-touch-icon.png` |

## Sample content

Anything with `sample: true` in `site.ts` shows a yellow "Sample" tag and is left out of the schema markup. Replace it with the real result, video or quote, then delete the flag. Never publish invented numbers or quotes.

FAQ answers go into FAQPage schema, so each one must be true. An answer starting with `CONFIRM` is left out of the schema until it's written.

## Videos

Add a Mux playback ID to `hero.showreel.playbackId` or to an entry in `work`. The poster loads lazily and the player only downloads when someone presses play. Each real video is added to the schema as a VideoObject; set its real upload date in `src/lib/schema.ts`.
