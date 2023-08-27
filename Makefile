.PHONY: frontend backend all

# Build and start Next.js frontend
frontend:
	cd frontend && npm run build && npm start

# Start Express backend
backend:
	cd backend && npm start

# Build and start both frontend and backend
all:
	make frontend & make backend

