# Amplify Digital Group: website and landing page

Built with [Astro](https://astro.build). Static output; JavaScript is limited to scroll animations, the header and click-to-play Mux video.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

Deploys on Netlify from `netlify.toml` (build `npm run build`, publish `dist`).

## Pages

| URL | What it is | File |
|---|---|---|
| `/start/` | **Ads landing page.** Use this link in Meta ads. The quiz sits right in the hero. | `src/pages/start.astro` |
| `/quiz/` | The same quiz on its own page, for direct links | `src/pages/quiz/index.astro` |
| `/privacy/` | Privacy policy | `src/pages/privacy.astro` |
| `/` | Main website (not built yet). Until it is, Netlify redirects `/` to `/start/` (see `netlify.toml`); remove that redirect when `src/pages/index.astro` is added. | — |

Both the main website and the landing page share the same theme: colors, fonts and spacing in `src/styles/global.css`, plus the logo, buttons, video player and footer components.

## Where things live

| Change | File |
|---|---|
| All copy: hero, the three objection bullets, proof cards, FAQ, contact | `src/data/site.ts` |
| Footer, disclaimers, privacy policy | `src/components/Footer.astro`, `src/pages/privacy.astro` |
| Client videos and details (Evaristo, Giovanni) | `featured` and `stories` in `src/data/site.ts`; the landing page cards read from `proofCards` |
| Structured data (schema.org) | `src/lib/schema.ts` |
| Quiz questions, contact step and thank-you text | `src/data/quiz.ts` (the quiz itself: `src/components/QuizForm.astro`) |
| Where buttons go, Meta Pixel ID | `ctaUrl` and `metaPixelId` in `src/data/site.ts` |
| Landing page sections and their styles | `src/pages/start.astro` |
| Colors, fonts, spacing | `src/styles/global.css` (`:root` variables) |
| Logo | `public/brand/logo-320.webp`, `logo-640.webp` (made for dark backgrounds), `logo.png` (square, for schema) |
| Social share image, favicons | `public/og.png`, `public/favicon.*`, `public/apple-touch-icon.png` |

## Quiz leads

On the landing page the quiz is in the hero and every button jumps to it; elsewhere buttons go to `/quiz/`. Answers and contact details are sent to **Netlify Forms** as the form named `quiz`.

- Netlify: **Site configuration → Forms → Enable form detection** (once), then redeploy. Leads appear under **Forms → quiz**.
- Email alerts: **Site configuration → Notifications → Emails and webhooks → Form submission notifications**.
- A hidden honeypot field (`company_website`) filters out most spam bots.
- With a Meta Pixel ID in `site.ts`, every page tracks `PageView` and each quiz submission tracks `Lead`.

## Keep it lean

The page follows one rule: if a section doesn't get more qualified people into the quiz, cut it. Header has no menu, every button goes to `/quiz/`, and proof sits below the fold.

## Sample content

Anything with `sample: true` in `site.ts` shows a yellow "Sample" tag and is left out of the schema markup. Replace it with the real result, video or quote, then delete the flag. Never publish invented numbers or quotes.

FAQ answers go into FAQPage schema, so each one must be true. An answer starting with `CONFIRM` is left out of the schema until it's written.

## Videos

**VSL:** add its Mux playback ID to `hero.vsl.playbackId` in `src/data/site.ts` (film it horizontal, 16:9). Until then the hero is a centered text block with no video; once the ID is set, the video layout and the "Watch how Evaristo…" caption come back on their own. Other videos: `featured.video`, a story's `video`, or an entry in `work`. The poster loads lazily and the player only downloads when someone presses play. Each real video is added to the schema as a VideoObject; give it an `uploadDate` next to its playback ID.
