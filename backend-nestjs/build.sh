#!/bin/bash

# Railway Build Script for NestJS
echo "🚂 Starting Railway build process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Generate Prisma client
echo "🔧 Generating Prisma client..."
npx prisma generate

# Build the application
echo "🏗️ Building NestJS application..."
npm run build

# Check if build was successful
if [ -f "dist/main.js" ]; then
    echo "✅ Build successful! dist/main.js created"
    ls -la dist/
else
    echo "❌ Build failed! dist/main.js not found"
    echo "Contents of dist directory:"
    ls -la dist/ || echo "dist directory does not exist"
    exit 1
fi

echo "🎉 Build complete!"
