# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Bundle your app source code inside the container
COPY . .

# Expose the port on which your Node.js application will run
EXPOSE 3000

# Start your Node.js application
CMD ["npm", "start"]