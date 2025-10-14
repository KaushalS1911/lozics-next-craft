#!/bin/bash

# Script to start both frontend and backend servers

echo "🚀 Starting Lozics Application..."
echo "=================================="

# Check if backend dependencies are installed
if [ ! -d "backend/node_modules" ]; then
    echo "📦 Installing backend dependencies..."
    cd backend && npm install && cd ..
fi

# Check if .env file exists in backend
if [ ! -f "backend/.env" ]; then
    echo "⚠️  WARNING: backend/.env file not found!"
    echo "📝 Please create backend/.env file with your email configuration."
    echo "📖 See BACKEND_SETUP.md for instructions."
    exit 1
fi

# Start backend in background
echo "🔧 Starting backend server..."
cd backend && npm run dev &
BACKEND_PID=$!
cd ..

# Wait a bit for backend to start
sleep 3

# Start frontend
echo "🎨 Starting frontend..."
npm run dev

# When frontend is stopped, also stop backend
kill $BACKEND_PID

