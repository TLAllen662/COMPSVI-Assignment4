# Use Node.js 16 as the base image.
FROM node:16

# Set the working directory inside the container.
WORKDIR /app

# Copy the package manifest into the container.
COPY package.json ./

# Install the application's dependencies.
RUN npm install

# Copy the application files into the container.
COPY . .

# Make port 3000 available to the application.
EXPOSE 3000

# Start the application with npm.
CMD ["npm", "start"]
