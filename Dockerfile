# Stage 1: Build the React application
FROM node:16-alpine AS build

WORKDIR /app

# Salin package.json dan package-lock.json
COPY package*.json ./

# Instal dependensi
# Ganti node-sass dengan sass
RUN npm uninstall node-sass && npm install sass

# Instal dependensi lain
RUN npm install

# Salin sisa file aplikasi
COPY . .

# Build aplikasi untuk production
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:stable-alpine

# Salin hasil build dari stage sebelumnya ke folder Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Ekspos port 80 untuk Nginx
EXPOSE 80

# Perintah untuk menjalankan Nginx saat container dimulai
CMD ["nginx", "-g", "daemon off;"]