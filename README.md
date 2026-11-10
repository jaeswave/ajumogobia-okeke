# Ajumogobia & Okeke — Website

React 19 · Vite 8 · Tailwind CSS 4 · React Router 7 · Framer Motion · React Hook Form · React Helmet Async · Lucide.

## Getting started
```bash
npm install
cp .env.example .env      # then fill in values (see below)
npm run dev               # http://localhost:5173
npm run build             # generates sitemap.xml + robots.txt, then builds to dist/
npm run preview           # serve the production build
```
Node 20.19+ is required.

## Environment variables
| Variable | Purpose |
|---|---|
| `VITE_SITE_URL` | Canonical domain for meta tags and sitemap.xml |
| `VITE_CONTACT_ENDPOINT` | POST JSON endpoint for the contact form |
| `VITE_NEWSLETTER_ENDPOINT` | POST JSON endpoint for newsletter sign-ups (`{ email, list }`) |
| `VITE_ALUMNI_ENDPOINT` | POST JSON endpoint for alumni registrations |
| `VITE_SHOW_REVIEW_NOTES` | `true` shows "Awaiting confirmation" markers; set `false` for launch |

Until an endpoint is set, forms still validate fully but tell the visitor that online
submission is not enabled yet and offer a direct email link — they never claim a message was sent.
Any service that accepts JSON POSTs works (Formspree, a serverless function, Mailchimp/Brevo via a proxy, the firm's own API).

## Where things live
- **Content**: `src/data/*.js` — firm, people, practices, publications, offices, awards, hero slides, navigation. Edit these, not components.
- **Images**: `src/data/images.js` — one registry; swap a URL and it updates site-wide.
- **Pages**: `src/pages/` (code-split per route) · **Routes & legacy redirects**: `src/routes/AppRoutes.jsx`
- **Components**: `src/components/{layout,common,home,people,practices,insights,forms,search}`
- **Form integration layer**: `src/services/`
- **Design tokens**: `src/styles/globals.css` (`@theme`)

## Deployment
Any static host. SPA fallback files are included for Netlify (`public/_redirects`) and Vercel (`vercel.json`).
For Apache/Nginx, rewrite unknown paths to `/index.html`.

See `PROJECT_AUDIT.md` and `CLIENT_APPROVAL_CHECKLIST.md` before launch.
