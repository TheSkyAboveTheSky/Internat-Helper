FROM node:18.10-alpine as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN yarn install

# Generate the build of the application
RUN yarn build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build ./dist/client /usr/share/nginx/html

# Expose port 4200
EXPOSE 4200