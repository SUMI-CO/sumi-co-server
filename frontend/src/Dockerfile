FROM node:20-alpine as build

WORKDIR /app

# Копируем package.json из родительской директории frontend
COPY ../package*.json ./

RUN npm install

# Копируем все остальные файлы из корневой директории frontend
COPY .. .

RUN npm run build

FROM nginx:1.24.0-alpine

# Копируем собранные файлы в директорию Nginx
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
