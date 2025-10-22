FROM node:22-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose app port
EXPOSE 3000

# Start command
CMD ["npm", "run", "dev"]
