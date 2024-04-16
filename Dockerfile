FROM node:18-alpine AS prod
# set working directory
WORKDIR /app
COPY package*.json ./
# COPY build ./
COPY .env ./
COPY tsconfig.json ./
RUN npm install --legacy-peer-deps
# RUN npm ci for production
# For reverse proxy settings
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY . .
# Build Stage
# RUN npm test - if you want to test before to build
# We are going to run build on Jenkinsfile
RUN npm run build
# Step 2: Serve the React app using Nginx
FROM nginx:alpine AS webserver

WORKDIR /usr/share/nginx/html
COPY --from=prod /app/build .
# OR COPY --from=prod /app/build /usr/share/nginx/html

# EXPOSE 3000
# EXPOSE 4000
# run nginx with global directives and daemon off
EXPOSE 80
# CMD ["npm", "start"] 
ENTRYPOINT ["nginx", "-g", "daemon off;"]