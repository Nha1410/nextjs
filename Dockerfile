### Stage 1: Dependencies + Build
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy only the necessary files first
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the app for production
RUN npm run build


### Stage 2: Production Image
FROM node:18-alpine AS production

WORKDIR /app

ENV NODE_ENV=production

# Copy built assets and required files
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.js ./

EXPOSE 3000

CMD ["npm", "start"]


### Stage 3: Development (Optional)
FROM node:18-alpine AS dev

WORKDIR /app

ENV NODE_ENV=development

# Copy files
COPY package.json package-lock.json* ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
