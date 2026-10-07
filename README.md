# Hamza Yakubu portfolio

The latest white, navy and electric-blue design, including the transparent portrait and CV. This download contains the portfolio application as a standard Next.js project, without the ChatGPT Sites hosting adapter.

## Run locally

Use Node.js 22 or newer. Open a terminal in this folder and run:

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

## Edit content

- `app/page.tsx`: content and interactions.
- `app/globals.css`: responsive styles and animations.
- `app/layout.tsx`: metadata and mobile viewport.
- `public/images/hamza-cutout.png`: transparent portrait.
- `public/documents/hamza-yakubu-cv.pdf`: CV download.

Contact buttons open email or phone apps. No API keys or environment variables are required.

## Put this project on GitHub

Create an empty GitHub repository, then run these commands from this folder. Replace YOUR-USERNAME with your actual GitHub username:

```bash
git init
git add .
git commit -m "Initial Hamza Yakubu portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/hamza-yakubu-portfolio.git
git push -u origin main
```

GitHub may ask you to authenticate. Never put an access token in your source files.

## Deploy

Import the GitHub repository into a standard Next.js hosting provider such as Vercel. The build command is `npm run build`. Connect hamzayakubu.com in your hosting provider and follow its DNS instructions.

The deployed ChatGPT Sites project has separate source history. Uploading this download to GitHub does not automatically synchronise subsequent Sites edits.
