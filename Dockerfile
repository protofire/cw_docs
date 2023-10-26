# Use the official Node.js image as a base image
FROM node:16.14

# Copy the rest of the application to the container
COPY . ./CW_docs

# Set the working directory in the container
WORKDIR /CW_docs

# Install the dependencies in the container
RUN yarn install 

# Build the Docusaurus website
RUN yarn build 

# Expose port 3000 for the Docusaurus server
EXPOSE 3000

# Command to run the Docusaurus server
CMD ["yarn", "serve"] 

