FROM node:lts-alpine AS builder
WORKDIR /opt/web
COPY package.json package-lock.json ./
COPY . ./
RUN npm install
RUN npm run build
# RUN npm run analyze

FROM nginx:alpine
COPY --from=builder /opt/web/build /usr/share/nginx/html
COPY ./deploy/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]