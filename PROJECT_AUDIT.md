# Project Audit — Ajumogobia & Okeke Website Redesign

Audit date: 10 November 2026. Source of truth: https://www.ajumogobiaokeke.com

## 1. How the content was retrieved
The build environment could not connect to ajumogobiaokeke.com directly (network allow-list), so pages
were read through a web-reader tool that returns **summaries/paraphrases** of each page rather than raw HTML.
Consequences:
- Facts, names, dates, titles, addresses, emails and phone numbers were captured accurately.
- Long-form body text (practice pages, biographies, articles) has been **re-written from those summaries** —
  meaning is preserved but wording is not the firm's verbatim original. The firm should review every page,
  or paste in the original wording, before launch.
- Images on the existing site could not be downloaded; existing portraits are hot-linked (see §5).

## 2. Pages discovered on the original website
| Original URL | Status | New route |
|---|---|---|
| `/` (home, 4-slide slider) | Migrated | `/` |
| `/firm` (Who We Are) | Migrated | `/firm` |
| `/history/` | Migrated | `/firm/history` |
| `/our-values/` | **Could not be accessed** — values taken from `/careers/` and `/firm` | `/firm/values` |
| `/client-care/` | Migrated (lorem-ipsum testimonials on old page were **not** migrated) | `/firm/client-care` |
| `/practice-areas/` | Migrated | `/practices` |
| 11 practice pages (`/aviation/`, `/banking-finance/`, `/taxation-and-foreign-investment/`, `/mining/`, `/oil-gas/`, `/intellectual-property/`, `/litigation/`, `/media-entertainment/`, `/maritime-shipping/`, `/capital-market-private-equity/`, `/company-secretarial/`) | Migrated | `/practices/:slug` |
| `/pro-bono/` | Migrated | `/pro-bono` |
| `/people` (Partners) | Migrated | `/people` |
| `/people/h-odein-ajumogobia-san/`, `/babatunde-a-sodipo/`, `/patrick-a-osu/` | Migrated | `/people/:slug` |
| People sub-groups: Associate Partners, Practice Manager, Senior Associates, Associates | **Menu items found, member lists not retrievable** | — |
| `/media/` page 1 of 4 (10 posts) | Migrated | `/publications` |
| `/media/` pages 2–4; categories News, Notable Cases, Resources | **Not retrieved** | — |
| 10 individual articles | Migrated (condensed — see §1) | `/publications/:slug` |
| `/careers/` | Migrated | `/careers` |
| `/alumni/` | Migrated | `/alumni` |
| `/contact/` | Migrated | `/contact` |
| `/privacy-policy/` | Migrated (summarised) | `/privacy-policy` |
| Sitemap (footer link) | Replaced by generated `/sitemap.xml` | — |

All legacy URLs above are redirected to their new routes in `AppRoutes.jsx`.

## 3. Content requiring verification
- **Abuja address conflict**: `/contact` says No. 84 Kwame Nkrumah Crescent, Asokoro; `/firm` says UAC Complex, Central Business District. Contact-page version used.
- **Lagos phone numbers**: `/contact` lists +234 (0) 201 633 4491/4492; all other pages list +234-1-2719368. Both shown.
- **H. Odein Ajumogobia — LL.M. year**: firm site says 1988; IFLR1000 says 1998. Firm site used.
- **Partner since 1987** vs founding in 1984 (as stated on the profile) — confirm.
- **Ministerial dates**: firm profile (Petroleum 2007–09, Foreign Affairs 2009–11) differs from IFLR1000 (Energy/Petroleum 2007–10).
- **ICC Court dates**: profile says 2001–2006; litigation page says a senior partner served 2000–2005.
- **Return to the Firm in 2011** (History milestone) comes from IFLR1000, not the firm's own site.
- **"Two Senior Advocates of Nigeria"** figure relies on Mr. Sodipo's profile (SAN conferred 30 Sept 2024).
- **Ebunoluwa B. Awosika** appears as Associate Partner in Chambers/IFLR1000 but not in retrievable firm pages — **not added**.
- **Kingsley N. Amaefule (Senior Associate)** and **Oluwafunmilola Lawal (Associate)** added from article bylines with pending profiles. Maryam Olaitan Bello (co-author, 2026) not added — designation unknown.
- Practice-area **key contacts** were assigned from each partner's own listed practice areas.
- COVID-19 articles were posted by "adminao"; names appearing as post tags are shown as "Contributors", not authors.
- Practice name changes for clarity: "Tax" → "Tax & Foreign Investment"; "Litigation" → "Litigation & Dispute Resolution"; "Maritime" → "Maritime & Shipping"; "Capital Market – Private Equity" → "Capital Markets & Private Equity".
- Hero slide 1 headline ("Legal Insight. Commercial Perspective. Enduring Impact.") is new copy from the brief; slides 2–5 reuse the existing slider headlines.
- Privacy Policy should be reviewed against the Nigeria Data Protection Act 2023.

## 4. Awards
The existing "Recent Awards" strip shows four badge images (uploaded Jan 2024) plus a Law Digest logo, with
**no names or alt text**. They could not be identified and were **not invented**. The Recognition section uses only
honours stated on the firm's own partner profiles (SAN 2003 & 2024, OFR 2010, Who's Who Legal 2004, Chambers
special mention, IFLR1000/WWL citations).

## 5. Images
**Existing images reused (hot-linked from the current WordPress site):**
- Portraits: Odein Ajumogobia, Babatunde Sodipo, Patrick Osu (`/wp-content/uploads/2018/01/…`). If they fail to load, a neutral "Portrait to follow" placeholder appears.

**Images requiring replacement / approval:**
- All architectural, boardroom, library and sector photography is interim **Unsplash** stock (free licence), set in `src/data/images.js`. These could not be previewed from the build environment; any that fail to load fall back to a branded navy placeholder. Replace with commissioned photography of the firm's offices (Sterling Towers) where possible.
- Logo: the current site has only a low-resolution PNG. A typographic wordmark is used; supply the official vector logo.
- Award badge artwork (see §4).
- No Aluko & Oyebode assets were used.

**Missing lawyer portraits:** Kingsley N. Amaefule, Oluwafunmilola Lawal, and all unretrieved team members.

## 6. Social media
LinkedIn, Facebook, Twitter/X and Instagram on the existing site all point to `#`. No social links are shown;
add verified URLs in `src/data/firm.js → firm.social` and they appear automatically in the footer.

## 7. Forms awaiting backend integration
| Form | Location | Env variable |
|---|---|---|
| Contact / appointment request | `/contact` | `VITE_CONTACT_ENDPOINT` |
| Monthly newsletter | Footer, `/publications` | `VITE_NEWSLETTER_ENDPOINT` |
| Alumni network | `/alumni` | `VITE_ALUMNI_ENDPOINT` |
All include validation, accessible labels and errors, loading states, honeypot spam field, and honest success/not-configured/error feedback.

## 8. Features requiring client approval
- Hero carousel copy and imagery; "Book a consultation" header CTA label.
- Interim stock photography.
- Visible "Awaiting confirmation" markers (turn off with `VITE_SHOW_REVIEW_NOTES=false`).
- Publications topic tags (Aviation, Tax, Corporate, Litigation, Maritime, Regulatory) are new groupings.
- Contact form "Area of interest" and "Preferred office" fields (new).

## 9. QA performed
- Production build passes (`npm run build`); routes code-split; homepage JS ≈ 190 kB gzipped total incl. React/Motion.
- Headless Chrome crawl of 27 routes incl. legacy redirects and 404: every page renders one `<h1>`, a unique title, no console/page errors, no horizontal overflow at 1440px.
- Interactions tested: carousel next/autoplay, mega menu open + Escape close, ⌘K search + Enter navigation, mobile drawer accordion + navigation, contact form validation (4 errors shown) and not-configured feedback, newsletter validation, publication topic filter.
- Screenshots reviewed at 1440×900 and 390×844.
- Not possible here: loading of external images (blocked in build environment), Lighthouse run, real-device testing. Recommend running Lighthouse after deployment.
