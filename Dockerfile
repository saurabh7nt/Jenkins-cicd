# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the React app
RUN npm run build

# Set environment variables
ENV PORT=3000

# Expose the specified port
EXPOSE $PORT

# Adjust permissions on the node_modules directory
RUN sudo chmod -R 777 node_modules/

# Run the React app using the production build
CMD ["npm", "start"]
