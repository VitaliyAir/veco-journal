# VEco Journal

Personal journal, articles and portfolio. React + TypeScript + Vite, hosted on GitHub Pages:
https://vitaliyair.github.io/veco-journal/

## Project layout

| Path | What lives there |
|---|---|
| `src/data/news.ts` | News items (newest first) |
| `src/data/portfolio.ts` | Portfolio projects |
| `src/data/site.ts` | Profile / contact links |
| `src/i18n/translations.ts` | UI texts in RU and EN |
| `src/components/` | UI components |
| `src/styles/global.css` | Styles |
| `.github/workflows/deploy.yml` | Build + deploy to GitHub Pages on push to `main` |

## One-time setup

1. GitHub → repo **Settings → Pages → Build and deployment → Source** = **GitHub Actions**.
2. Locally: `npm install` (Node 20+).

## Everyday flow: from code change to live site

1. `git pull` — get the latest code.
2. `npm run dev` — open http://localhost:5173/veco-journal/ (auto-reloads on save).
3. Make the change (data files, translations, components, styles).
4. `npm run build` then `npm run preview` — check the production build at http://localhost:4173/veco-journal/.
   `build` also type-checks; a type error stops it (and stops the deploy).
5. `git add -A` and `git commit -m "..."`.
6. `git push` — this is the deploy.
7. Watch the **Actions** tab (or `gh run watch`) until the run is green (~1–2 min).
8. Open the site; Ctrl+F5 if you still see the old version.

Never upload `dist/` by hand — GitHub builds it.

## When something goes wrong

- **Red Actions run:** the live site stays on the last good version. Read the log, fix locally, push again.
- **Bad change is live:** `git revert HEAD` then `git push` — the previous state redeploys.
- **Bigger features:** work on a branch (`git switch -c feature/x`), merge to `main` when ready. Only `main` deploys.
