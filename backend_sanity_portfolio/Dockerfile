# Gunakan base image Node.js
FROM node:18-alpine

WORKDIR /app

# Salin package.json dan package-lock.json
COPY package*.json ./

# Instal dependensi dengan --legacy-peer-deps
RUN npm install --legacy-peer-deps

# Salin sisa file backend
COPY . .

# Sanity Studio berjalan di port 3333
EXPOSE 3333

# Perintah untuk menjalankan Sanity Studio
CMD ["npx", "sanity", "start"]