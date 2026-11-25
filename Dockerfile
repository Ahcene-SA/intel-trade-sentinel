# Build stage
FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN NITRO_PRESET=node-server npm run build

# Runtime stage
FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production

COPY --from=build /app/.output ./.output

# Nitro's node-server preset listens on PORT (default 3000), on all interfaces.
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
