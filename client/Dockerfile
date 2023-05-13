# Use an official Node runtime as a parent image
FROM node:18.10-alpine as build

# Set the working directory to /app
WORKDIR /app

# Install the Angular CLI globally
RUN npm install -g @angular/cli

# Copy package.json and install dependencies
COPY ./package.json .
RUN yarn install

# Copy all source files and build the app
COPY . .
RUN ng build --configuration=production

# Use an official Nginx runtime as the parent image
FROM nginx:latest as runtime

# Copy the build files to the default Nginx html directory
COPY --from=build /app/dist/client /usr/share/nginx/html

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 4200
EXPOSE 4200

# Start Nginx and serve the app
CMD ["nginx", "-g", "daemon off;"]
