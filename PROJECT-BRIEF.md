# EEX Origin Website — Project Brief

> **Read this file first when starting a new session.**
> Say: "Read PROJECT-BRIEF.md and continue from where it left off"

---

## Company

- **Name:** Energy Exchange Origin LLP (EEX Origin)
- **Domain:** eexorigin.com
- **Industry:** Energy trading & advisory (India)
- **Location:** 703-1, 3rd Floor, Oppanakara Street, Coimbatore, Tamil Nadu — 641001
- **Phone:** +91 88381 97744
- **Email:** info@eexorigin.com

## Tech Stack

- **Framework:** React 18 + Vite 4
- **Styling:** Tailwind CSS 3 + custom CSS tokens in `src/index.css`
- **UI Components:** shadcn/ui (Radix primitives)
- **Animation:** framer-motion
- **Routing:** react-router-dom
- **Backend/DB:** Firebase Firestore (contact form saves to `customerQueries` collection)
- **Hosting:** Firebase Hosting
- **Icons:** lucide-react

## Design System

### Fonts (Google Fonts)
- **Headings:** Instrument Serif (serif, italic accent)
- **Body:** DM Sans (clean sans-serif)

### Colours
- `--green-deep: #0D6B45` (primary brand)
- `--green-mid: #0F8C5A`
- `--green-light: #E8F5EE`
- `--green-pale: #F2FAF6`
- `--navy: #141B2D` (footer, dark sections)
- `--navy-mid: #1E2A42`

### Utility Classes (defined in `src/index.css` under `@layer components`)
- `.section-eyebrow` — small uppercase label above headings
- `.heading-serif` — Instrument Serif heading style
- `.btn-primary` — green deep button
- `.btn-secondary` — outline button
- `.card-premium` — white card with border and shadow

### Tailwind Extensions (in `tailwind.config.js`)
- Custom fontFamily: `serif` → Instrument Serif, `sans` → DM Sans
- Custom colors: `green-deep`, `green-mid`, `green-light`, `green-pale`, `navy`, `navy-mid`

## Project Structure

```
src/
├── App.jsx                    # Routes
├── index.css                  # Tailwind + custom tokens + ticker animation
├── main.jsx                   # Entry point
├── firebaseConfig.js          # Firebase config (DO NOT MODIFY)
├── components/
│   ├── Navbar.jsx             # Top navigation
│   ├── Footer.jsx             # Navy footer
│   └── MarketTicker.jsx       # Scrolling energy market ticker (indicative rates)
├── pages/
│   ├── Home.jsx               # Homepage with hero, ticker, services, why us, dashboard preview, CTA
│   ├── About.jsx              # Mission, values, credentials
│   ├── Contact.jsx            # Contact info + Firebase form (saves to Firestore)
│   ├── Services.jsx           # 5 service cards with images
│   ├── LongTermPPA.jsx        # Long term PPA detail page
│   ├── MediumTermPPA.jsx      # Medium term PPA detail page
│   ├── ShortTermPPA.jsx       # Short term energy trading page
│   ├── RPOObligations.jsx     # Renewable Purchase Obligation page
│   ├── CarbonCreditAdvisory.jsx  # Carbon credit advisory page
│   ├── SavingsCalculator.jsx  # ORPHANED — no longer routed (calculator feature removed), safe to delete
│   └── ServiceFull.jsx        # Redirects to /services
├── components/
│   ├── GridNetworkBackground.jsx  # Animated canvas node/edge network for hero background
│   ├── MagneticButton.jsx     # Cursor-attracted button/link (Link/a/button polymorphic)
│   └── TiltCard.jsx           # 3D mouse-tilt wrapper for cards
└── assets/                    # Images (long new.png, medium.png, image5.jpeg, RPO.png, carbon.png)
```

## Routes

| Path | Component |
|------|-----------|
| `/` | Home |
| `/about` | About |
| `/contact` | Contact |
| `/services` | Services |
| `/services/full` | ServiceFull (redirects to /services) |
| `/services/ltp` | LongTermPPA |
| `/services/mtp` | MediumTermPPA |
| `/services/stp` | ShortTermPPA |
| `/services/rpo` | RPOObligations |
| `/services/carbon-credit-advisory` | CarbonCreditAdvisory |

> Note: `/calculator` route was removed per user request ("remove calculator"). The savings calculator feature is fully gone from nav, home preview, and routes. `SavingsCalculator.jsx` file still exists on disk but is orphaned/unused.

The navbar also has an **"App"** tab (desktop + mobile) linking externally to the live Dashboard app — see "Dashboard Integration" below.

## Key Features Built

### Market Ticker (`MarketTicker.jsx`)
- Scrolling horizontal ticker showing 8 energy market indicators
- IEX DAM, RTM, REC Solar/Non-Solar, Green DAM, SECI Tariff, Carbon Credit CER, Wind Tariff
- Simulated data with 30-second fluctuation interval
- Labeled "Indicative Rates" (not "Market" — to be honest about simulated data)
- Navy background, green/red trend arrows, pauses on hover
- Animation CSS in `src/index.css` (`@keyframes ticker`)

### Savings Calculator — REMOVED
- The calculator feature (route, nav link, home preview section, CSS) was fully removed per user request.
- `SavingsCalculator.jsx` file itself still sits unused in `src/pages/` — low-priority cleanup.

### Dashboard Integration — LIVE (in Home.jsx + Navbar.jsx)
- The EEX Dashboard app is **actually deployed** on DigitalOcean: `https://energy-origin-nhtpj.ondigitalocean.app/`
- `APP_URL` constant holds this URL in both `Navbar.jsx` and `Home.jsx`
- Navbar has an "App" tab (desktop pill + mobile menu item) linking out to it (`target="_blank"`)
- Home.jsx dashboard preview section changed from "Coming Soon" → "Now Live": the mockup card is a clickable link to the real app, badge reads "Open Dashboard →", browser-bar shows the real URL
- Feature list replaced with a **real, truthful module list** pulled directly from the Dashboard app's own `NAV_ALL` navigation array (`Dashboard.jsx` in the DASHBOARD project): Dashboard, Bills, Compare, Sources, Cost Analysis, PPAs, Solar, ESG, Diesel Gen, Documents, Reports & Escalation (11 modules) — rendered as an animated horizontal marquee (`dashboardModules` array, `.module-marquee` CSS)
- Module count in the description text is computed dynamically (`{dashboardModules.length} modules`), never hardcoded, so it can't drift out of sync with the real app
- Hosting/deploy: website is on GoDaddy hosting; GitHub Actions already auto-deploys on push to the repo — no manual deploy step needed once pushed
- Optional future polish (not done): point a branded subdomain `app.eexorigin.com` at the DigitalOcean app via GoDaddy DNS CNAME + DigitalOcean custom domain, then swap `APP_URL` to that

### Live "Grid Network" Hero + Section Interactivity (Home.jsx, new components)
- Hero rebuilt as a centered, single-column layout with an animated background: `GridNetworkBackground.jsx` — a canvas-based network of nodes/edges with traveling light pulses (reads as "live energy grid", not a real grid map), respects `prefers-reduced-motion`
- Two floating "live rate" chips over the hero (IEX DAM, PPA Rate) with a ripple-pulse badge dot
- Hand-drawn SVG "ground scene" under the hero: line-art solar panel arrays (pulsing glow) + wind turbines with independently-spinning blade groups (different speeds/directions for a natural feel)
- CTA buttons site-wide (hero + bottom CTA section) now use `MagneticButton.jsx` — buttons gently pull toward the cursor on hover
- Services section cards wrapped in `TiltCard.jsx` for a subtle 3D tilt-toward-cursor effect, on top of the existing lift/accent-sweep hover
- Why Us (navy) section cells: icon now sits in a chip that grows/glows/changes to brand green on hover, cells lift slightly, plus a faint dot-grid texture layered behind for consistency with the Services section
- CTA section keeps its floating gradient orbs (`.cta-orb-1/2`) from the previous round
- All new CSS lives in `src/index.css` under "Live grid-network hero" section (search for `.hero-live`); all respects `prefers-reduced-motion`

### Contact Form (Contact.jsx)
- **CRITICAL:** Firebase Firestore integration MUST be preserved
- Saves to `customerQueries` collection via `addDoc`
- Fields: name, email, phone (10-digit validation), queryType (dropdown), queryBrief (textarea)
- Success state with checkmark icon

## CRITICAL PRINCIPLES

### 1. NO FAKE DATA
> "keep the true details dont add hyping details without having true"

- **NEVER** add fake statistics (e.g., "500+ MW", "150+ clients", "₹200Cr+")
- **NEVER** add fake company names as clients (e.g., TATA POWER, ADANI)
- **NEVER** add fake testimonials or reviews
- **NEVER** add unverified certifications (ISO 9001, CERC Registered were removed)
- Everything on the site must be verifiable truth
- Use honest alternatives: "Regulatory Expertise" instead of "CERC Registered"
- Market ticker labeled "Indicative Rates" (not presented as live market data)
- Calculator says "estimates" and "indicative rates"

### 2. No "Free" Language
- The word "free" has been removed from all CTAs
- Use "Request an Audit", "Request a Consultation" instead

### 3. Dashboard Project Boundary
> "this is app folder but dont make any changes without my knowledge"

- The DASHBOARD project (`E:\EEX\DASHBOARD`) must NOT be modified without explicit approval
- The website project (`E:\EEX\eexorigin\eexorigin-site`) IS being modified with approval

### 4. Build Locally
- Vite build CANNOT run from a remote shell (esbuild platform mismatch — Windows vs Linux)
- Always run `cd eexorigin-site && npm run dev` on the local machine
- Make sure to be in the `eexorigin-site` directory, not the parent `eexorigin` folder

## Related Projects

### EEX Dashboard (`E:\EEX\DASHBOARD`)
- Full energy management platform (React + Node.js + MySQL)
- Features: Dashboard overview, Bills, Compare, Sources, PPAs, Solar monitoring, ESG/emissions, Diesel Gen tracking, Documents, Reports & Escalation
- Not yet integrated with the website — shown as "Coming Soon" preview
- Do NOT modify without explicit permission

### PowerForecast Pro
- Separate project for GDAM/DAM/RTM electricity market forecasting
- Has its own skill (`powerforecast-pro-project`)

## Current Status (Last Updated: September 22, 2026 — production readiness audit + fixes)

### Completed
- Full site redesign with premium design system; all pages rewritten (Home, About, Services, PPA subpages, RPO, Carbon Advisory, Dashboard, Price Forecast, Contact)
- Nested two-level hover-flyout Services dropdown in the navbar (Sustainability Advisory / PPA — Commercial & Industrial)
- 6-clip combined hero video on the homepage
- All fake data removed site-wide (incl. ISO 9001 / CERC Registered claims); no "free" language
- **Production readiness audit completed (Sept 22, 2026)** — full report delivered to Maha. Key fixes already applied:
  - Hosting resolved to Firebase Hosting only — deleted conflicting `CNAME` (GitHub Pages) and `.htaccess` (Apache/Hostinger) files
  - **Fixed a real bug**: `public/index.html` was the default Firebase "Setup Complete" placeholder page, colliding with the real app at build time (Vite copies `public/` verbatim into `dist/`). Deleted, along with a stray Netlify `_redirects` file
  - Added a proper 404 page + catch-all route (`src/pages/NotFound.jsx`)
  - Removed "Hostinger Horizons" dev-builder scaffolding from `vite.config.js` (was injecting error-reporting scripts + a `window.fetch` monkeypatch into every production page)
  - Removed the `X-Powered-By: Hostinger Horizons` header (came with the deleted `.htaccess`)
  - Repo cleanup: removed `dist/`, `dist2`–`dist5/`, `build/`, stray `(public)/` folder, `just check.txt`, 3 unrelated WhatsApp images, `.DS_Store` files, stale `vite.config.js.timestamp-*` files; added proper `.gitignore` rules
  - Deleted dead code: `Full.jsx` (empty), `HeroPreview.jsx` (was explicitly marked temporary), `SavingsCalculator.jsx` (Maha's call — was built but never routed), and 8 unused components (`ElectricityBackground`, `GridNetworkBackground`, `MagneticButton`, `MouseGlow`, `ParticleMorph`, `HeroGlobe`, `HeroParticles`, `HeroScene`). Removed the now-unused `three` dependency from `package.json`
  - SEO: added per-page titles + meta descriptions (`src/components/Seo.jsx`, used on every route), Open Graph + Twitter Card tags with a real share image (`public/og-image.jpg`), `robots.txt`, `sitemap.xml`
  - Contact form: fixed `<select>` options whose stored values didn't match their labels (was silently saving `"pricing"` instead of `"Long Term PPA"`, etc.); replaced `alert()` on error with the app's existing toast system
  - Accessibility: added a skip-to-content link + `id="main-content"` landmark, and an `ErrorBoundary` around the routed pages so a component crash shows a friendly fallback instead of a blank screen
  - Every change verified with a full `npx vite build` after applying

### Pending / Known Issues
- **NEEDS MAHA TO CHECK**: Firestore Security Rules for the `customerQueries` collection — not in this repo, only in the Firebase console. Contact form currently has no CAPTCHA/spam protection, so if the rules allow open public writes, that's the real exposure.
- No code-splitting yet (single ~760KB JS bundle, ~211KB gzipped) — works fine today, optional future optimization
- `package-lock.json` still lists `three` until the next `npm install` is run locally
- Full audit report: see the file delivered to Maha in chat (production-readiness audit, Sept 22 2026) for the complete list of remaining medium/low priority items
- Once verified locally, push to GitHub — GitHub Actions auto-deploys to Firebase Hosting on merge to `main`

## How to Continue Work

1. Connect the `eexorigin-site` folder
2. Read this file
3. Check `Current Status` section above for what's done and what's pending
4. Always follow the CRITICAL PRINCIPLES
5. Run `npm run dev` locally to test (not from remote shell)
6. Update the `Current Status` section in this file when work is completed
