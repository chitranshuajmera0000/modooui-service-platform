#!/bin/bash
echo "Starting NestJS application..."
echo "Current directory: $(pwd)"
echo "Listing dist directory:"
ls -la dist/
echo "Starting application..."
node dist/main.js
