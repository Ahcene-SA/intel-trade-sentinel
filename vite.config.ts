import { resolve } from "node:path";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  // Plugin order matters: react must come after tanstackStart, or JSX transforms
  // run before the Start plugin and SSR breaks.
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      server: { entry: "server" },
    }),
    // Preset is overridable for other hosts (e.g. NITRO_PRESET=vercel_edge).
    nitro({ preset: process.env.NITRO_PRESET || "cloudflare-module" }),
    react(),
  ],
  css: { transformer: "lightningcss" },
  resolve: {
    alias: { "@": resolve(import.meta.dirname, "src") },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-dom/client", "react/jsx-runtime", "react/jsx-dev-runtime"],
    ignoreOutdatedRequests: true,
  },
  server: { host: "::", port: 8080 },
});
