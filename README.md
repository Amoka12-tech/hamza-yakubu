# Hamza Yakubu — latest portfolio source

This is the latest multi-page design: dark glass surfaces, blue accents and the transparent portrait, inspired by the visual direction of michaelgaio.dev. It uses Hamza’s original content and assets. The mobile homepage places the portrait first.

This package runs as a standard Next.js project. The live ChatGPT Sites application uses a Vinext hosting adapter, which is not needed here.

## Run locally

Install Node.js 22.13 or newer. Open a terminal in this folder:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production

```bash
npm run typecheck
npm run build
npm start
```

## Pages and interactions

- `/`: brief introduction, interactive focus selector and page links.
- `/about`: biography, selectable expertise and education/leadership/recognition panels.
- `/work`: category filters and gallery/list switching.
- `/work/confluence-impact-summit`, `/work/electher`, `/work/international-storytelling`: individual engagement pages with expandable details.
- `/experience`: career filters and selectable roles.
- `/contact`: direct links, copy email and an email draft composer.

The contact composer opens the visitor’s email app; it does not send or store messages. No API keys or environment variables are needed.

## Edit the portfolio

- `data/hamza.ts`: expertise, engagements and career data.
- `components/portfolio/Home.tsx`: homepage.
- `components/portfolio/Pages.tsx`: interactive content pages.
- `components/portfolio/Shell.tsx`: navigation, footer and page transitions.
- `app/globals.css`: styles, breakpoints, animation and reduced-motion support.
- `app/layout.tsx`: metadata and viewport.
- `app/**/page.tsx`: page routes and metadata.
- `public/images/hamza-cutout.png`: transparent portrait.
- `public/documents/hamza-yakubu-cv.pdf`: downloadable CV.

## GitHub

Create an empty repository and run these commands from this folder, replacing YOUR-USERNAME with your actual GitHub username:

```bash
git init
git add .
git commit -m "Latest Hamza Yakubu portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/hamza-yakubu-portfolio.git
git push -u origin main
```

## Hosting

Import the repository into a standard Next.js hosting provider. Use `npm run build` as the build command. Connect hamzayakubu.com through your provider and follow its DNS instructions.

This ZIP is a source snapshot. GitHub is not connected automatically, and later edits in ChatGPT Sites do not automatically sync to the repository.
