# A&A Associate — World's Fastest UAE Residency Program

A premium, responsive landing-page demo for A&A Associate, adapted from the supplied Lumora project. The page preserves the original spring animation system, Lenis smooth scrolling, liquid image reveal, responsive layout, navigation overlay, consultation modal, and production-oriented Next.js structure.

## Campaign content

- $4,550 all-inclusive package
- Five-working-day process: three days remote, two days in the UAE
- Two-year UAE investor residency
- Free-zone company and trade licence
- Emirates ID, VIP medical, biometrics and immigration setup
- Bank introduction support
- A&A credibility and authority-partnership statistics

The current A&A campaign photograph and logo are stored locally in `public/assets/` so the design is not dependent on third-party image hosting.

## Run locally

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
yarn build
yarn start
```

## GitHub setup

```bash
git init
git add .
git commit -m "feat: add A&A UAE residency landing page"
git branch -M main
git remote add origin <your-repository-url>
git push -u origin main
```

## Deployment note

The consultation form is a demo interaction. Connect the existing contact API route to the final CRM or email destination before production launch. Set `NEXT_PUBLIC_SITE_URL` to the final domain for canonical URLs and social metadata.
