### STAGE 1: Build ###
FROM node:14-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.17.8-alpine
# uses the configuration file 'nginx.conf' in this project
COPY nginx/default.conf /etc/nginx/nginx.conf.d
COPY --from=builder /app/dist/dataEnvelopeDiscoveryUI /usr/share/nginx/html
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'

## Run application with:
## docker run --name dataEnvelopeDiscoveryUI -d -p 8080:80 app-job-manager
