# # Stage 0 - Build Frontend Assets
# FROM node:12.16.3-alpine as build

# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run dev

# # Stage 1 - Serve Frontend Assets
# FROM fholzer/nginx-brotli:v1.12.2


# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 443
# CMD ["nginx", "-g", "daemon off;"]