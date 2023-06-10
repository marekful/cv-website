FROM node:18 AS build
LABEL authors="Marcell Fülöp"

WORKDIR /app

COPY . .

RUN npm ci && \
     npm run lint && \
    npm run test:unit && \
    npm run build && \
    adduser -g 'Nginx www user' -h /home/www/ wwwcbz

FROM alpine AS release

RUN apk update && \
    apk add nginx

WORKDIR /app

COPY --from=build /app/dist/ .
COPY docker /

EXPOSE 80

CMD nginx -g 'daemon off;'