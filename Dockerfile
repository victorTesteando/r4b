# Stage 1: Build the application
FROM node:20.10.0 as builder

# Set the working directory
WORKDIR /app

COPY package.json  ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port the app runs on
EXPOSE 80

# Command to run the application
CMD ["npm", "start"]