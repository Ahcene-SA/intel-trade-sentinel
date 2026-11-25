# Build stage — bun, matching the project's bun.lock (npm ci trips over an
# optional-deps (@emnapi) lockfile mismatch between npm 10 and npm 11).
FROM oven/bun:1-alpine AS build
WORKDIR /app

COPY package.json bun.lock bunfig.toml ./
RUN bun install --frozen-lockfile

COPY . .
RUN NITRO_PRESET=node-server bun run build

# Runtime stage
FROM node:24-alpine
WORKDIR /app
ENV NODE_ENV=production

COPY --from=build /app/.output ./.output

# Nitro's node-server preset listens on PORT (default 3000), on all interfaces.
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
