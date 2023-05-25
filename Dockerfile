FROM node:20-alpine3.16 AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json ./
RUN npm i

FROM node:20-alpine3.16 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine3.16 AS runner
WORKDIR /usr/src/app
COPY package.json ./
RUN npm i --production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public

cmd ["node", "dist/src/main.js"]
