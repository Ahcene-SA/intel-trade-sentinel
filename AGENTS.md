# Intel Trade by CA — agent notes

- Keep additional security-offering copy in a typed trilingual module; adapt its cybersecurity content into the main solutions list and render Home Security separately to avoid duplicate offerings.
- Use the logo asset in src/assets for the header and derive the small local favicon from its emblem to keep the two brand placements consistent.
- Keep solution colors attached to service metadata rather than tab positions so removing a domain preserves the remaining colors.
- Anchor the solutions monitoring backdrop to the section, starting above its label, rather than using sticky positioning; this keeps its upper edge stable while scrolling and switching services.
- All video and brand assets live in src/assets (no CDN); the only external dependency is Google Fonts, loaded from src/routes/__root.tsx.
- Build target is nitro with the Cloudflare Workers preset by default; override with NITRO_PRESET for other hosts. Never set ssr.external or resolve.external: the Worker has no runtime module resolution, so the build fails. Never add compression (compressPublicAssets, vite-plugin-compression): hosting already compresses at the edge.
