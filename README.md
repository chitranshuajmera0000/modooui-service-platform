# 모두의 권리 (Modooui) Service Platform

A full-stack service matching platform similar to Soomgo, where users can request quotes from service providers for various services like cleaning, pest control, maintenance, and more.

## 🚀 Features

- **User Authentication** - JWT-based secure login/registration
- **Service Matching** - Users can request quotes from service providers
- **Quotation Management** - Real-time quote requests and responses
- **User Profiles** - Comprehensive user and service provider profiles
- **Service Categories** - Multiple service types (cleaning, pest control, maintenance, etc.)
- **Mobile Responsive** - Optimized for both desktop and mobile devices

## 🛠 Tech Stack

### Backend
- **Node.js** with **Express.js**
- **TypeScript** for type safety
- **PostgreSQL** database
- **Prisma ORM** for database management
- **JWT** for authentication
- **bcryptjs** for password hashing

### Frontend (Coming Soon)
- **React.js** with **TypeScript**
- **Zustand** for state management
- **TanStack Query** for server state management
- **Atomic Design Pattern** for component architecture

## 📁 Project Structure

```
backend/
├── src/
│   ├── controllers/     # Request handlers
│   ├── middleware/      # Custom middleware (auth, etc.)
│   ├── routes/         # API route definitions
│   ├── services/       # Business logic
│   ├── utils/          # Utility functions
│   ├── generated/      # Prisma generated client
│   ├── app.ts          # Express app configuration
│   └── server.ts       # Server entry point
├── prisma/
│   └── schema.prisma   # Database schema
└── package.json
```

## 🗄 Database Schema

- **User** - User accounts (customers & service providers)
- **Service** - Available services offered by providers
- **QuotationRequest** - User requests for quotes
- **Quotation** - Provider responses to requests
- **Consultation** - Scheduled meetings/consultations

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL database
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/modooui-service-platform.git
   cd modooui-service-platform
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your database URL and JWT secret
   ```

4. **Run database migrations**
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

The backend server will start on `http://localhost:3000`

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### User Management
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

### Quotations
- `POST /api/quotations/request` - Create quotation request
- `GET /api/quotations/received` - Get received quotations
- `GET /api/quotations/sent` - Get sent quotations (providers)
- `POST /api/quotations/respond` - Respond to quotation request

### Services
- `GET /api/services` - Get all services
- `GET /api/services/category/:category` - Get services by category
- `POST /api/services` - Create new service (providers only)

## 🔒 Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## 🚧 Development Status

- ✅ Backend API (Node.js/Express)
- ✅ Database Schema & Migrations
- ✅ Authentication System
- ✅ Core API Endpoints
- 🔄 Converting to NestJS (In Progress)
- ⏳ Frontend Development (React)
- ⏳ Deployment Setup

## 🎯 Next Steps

1. **Convert to NestJS** - Migrate from Express to NestJS for better architecture
2. **Frontend Development** - Build React frontend with modern architecture
3. **Additional Features** - Rating system, payment integration, chat functionality
4. **Testing** - Unit and integration tests
5. **Deployment** - Production deployment setup

## 🤝 Contributing

This is a portfolio project, but suggestions and feedback are welcome!

## 📄 License

This project is for educational and portfolio purposes.

---

**Built with ❤️ for learning full-stack development**
