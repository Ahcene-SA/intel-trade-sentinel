# Intel Trade by CA — Site vitrine

Trilingual (FR / EN / NL) marketing site for Intel Trade by CA, a security
consulting & technology-sourcing company. Single page with seven solution
domains, client/partner logos, FAQ and contact sections.

This project was originally built with Lovable; it is now fully self-hosted
and owned by this repository.

## Stack

- TanStack Start (React 19, SSR) + TanStack Router
- Tailwind CSS 4
- Vite 8 + nitro (build target: Cloudflare Workers by default — override with
  `NITRO_PRESET=<name>` for another host)
- TypeScript, Vitest

## Development

```sh
npm install
npm run dev        # dev server on http://localhost:8080
```

## Build & deploy

```sh
npm run build      # outputs to .output/ (nitro) — client assets in .output/public
npm run preview    # serve the production build locally
```

### Dokploy (VPS)

Dokploy builds the `Dockerfile` from this repo (nitro `node-server` preset, app
listens on port 3000). In the Dokploy panel: create an Application service
under a project → source type **Git** with this repo URL and branch `main`
(build type **Dockerfile**) → set the app port to **3000** → add the domain
(e.g. `inteltradebyca.com`) and enable Let's Encrypt SSL.

Every push to `main` can be redeployed with one click in the panel (or auto if
you enable redeploy on push).

To build/run manually:

```sh
docker build -t intel-trade-site .
docker run -p 3000:3000 intel-trade-site
```

For a bare `npm run build && node .output/server/index.mjs` Node deployment,
set `NITRO_PRESET=node-server` at build time (the default preset targets
Cloudflare Workers).

## Tests & checks

```sh
npm test           # vitest
npm run lint       # eslint
npm run format     # prettier
```

## Structure

- `src/routes/index.tsx` — the page (hero, solutions, IA, sectors, process, FAQ, contact)
- `src/components/security-offerings.tsx` — solutions tabs & videos
- `src/lib/i18n.ts`, `src/lib/security-offerings.ts` — trilingual copy & service metadata
- `src/assets/` — videos, logo and brand SVGs (all local, no CDN)
