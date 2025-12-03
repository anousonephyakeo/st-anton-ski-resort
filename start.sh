#!/bin/bash

# St. Anton Expedition - Development Server Startup Script
# Run this with: bash start.sh

echo "🏔️  St. Anton Winter Expedition - Starting Development Server"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found"
    echo "Please run this script from the project root: ~/Desktop/st.anon/stanon-web"
    exit 1
fi

# Kill any existing Next.js processes on common ports
echo "🔄 Cleaning up existing processes..."
lsof -ti:3000,3001,3002,3003 2>/dev/null | xargs kill -9 2>/dev/null
sleep 1

# Clean Next.js cache for fresh start
echo "🧹 Cleaning build cache..."
rm -rf .next

# Verify dependencies
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

echo ""
echo "✅ Pre-flight checks complete!"
echo ""
echo "🚀 Starting Next.js development server..."
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Start the dev server
npm run dev
