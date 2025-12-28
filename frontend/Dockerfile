# Build stage
# Multi-stage build: build with Node, serve static build with lightweight nginx
FROM node:18-alpine AS builder

WORKDIR /app


# Copy package manifests and install dependencies (including devDeps needed for build)
COPY package*.json ./
RUN rm -rf node_modules package-lock.json
RUN npm cache clean --force
RUN npm install react-router-dom --save
# RUN npm install react-router-dom --no-audit --no-fund --legacy-peer-deps

# Copy source and build
COPY . .
RUN npm run build 

# Production stage
FROM node:18-alpine
WORKDIR /app
# Copy built static files from the builder stage
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/public/ ./public/
COPY --from=builder /app/src/ ./src/


EXPOSE 3000

CMD ["npm", "start"]
