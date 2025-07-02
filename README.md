# ChatBase Backend

A basic Express.js server with TypeORM and PostgreSQL integration.

## Features

- Express.js server with TypeScript
- TypeORM integration with PostgreSQL
- User entity with CRUD operations
- RESTful API endpoints
- Environment configuration

## Prerequisites

- Node.js (v16 or higher)
- PostgreSQL database
- npm or yarn

## Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd chatbase-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   - Copy `env.example` to `.env`
   - Update the database configuration in `.env`:
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=postgres
   DB_PASSWORD=your_password
   DB_DATABASE=chatbase_db
   DB_SYNCHRONIZE=true
   DB_LOGGING=true
   ```

4. **Database Setup**
   - Create a PostgreSQL database named `chatbase_db`
   - The tables will be automatically created when you start the server (if `DB_SYNCHRONIZE=true`)

5. **Start the server**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm run build
   npm start
   ```

## API Endpoints

### Health Check
- `GET /health` - Server health status

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Example User Creation
```bash
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "name": "John Doe",
    "avatar": "https://example.com/avatar.jpg"
  }'
```

## Project Structure

```
chatbase-backend/
├── src/
│   ├── config/
│   │   └── database.ts      # TypeORM configuration
│   ├── entities/
│   │   └── User.ts          # User entity
│   └── routes/
│       └── users.ts         # User routes
├── index.ts                 # Main server file
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
└── env.example             # Environment variables example
```

## Development

- The server runs on port 5000 by default
- TypeORM will automatically create database tables on startup
- Hot reload is enabled in development mode
- TypeScript compilation is handled automatically

## Database Schema

### Users Table
- `id` (Primary Key, Auto Increment)
- `email` (Unique, Required)
- `name` (Required)
- `avatar` (Optional)
- `createdAt` (Auto-generated timestamp)
- `updatedAt` (Auto-updated timestamp) 