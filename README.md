# Link Shortener API

A RESTful API for a link shortening service built with Node.js, Express.js, and MongoDB. This backend provides user authentication and serves as the foundation for a URL shortening application.

## 🚀 Features

- **User Authentication**: Secure signup and login with JWT tokens
- **Password Security**: Bcrypt hashing for password protection
- **MongoDB Integration**: Persistent data storage with Mongoose ODM
- **RESTful API**: Clean and organized API endpoints
- **Environment Configuration**: Secure configuration with dotenv

## 🛠️ Technologies Used

- **Backend Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: Bcrypt
- **Runtime**: Node.js
- **Development**: Nodemon for hot reloading

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local installation or MongoDB Atlas)
- [Bun](https://bun.sh/) (optional, but recommended for faster package management)

## ⚙️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd link-shortner
   ```

2. **Navigate to the backend directory**

   ```bash
   cd backend
   ```

3. **Install dependencies**

   ```bash
   # Using npm
   npm install

   # Or using bun (faster)
   bun install
   ```

4. **Set up environment variables**

   Create a `.env` file in the backend directory:

   ```env
   MONGODB_URI=mongodb://localhost:27017/link-shortener
   JWT_SECRET=your_super_secret_jwt_key_here
   ```

   **Important**: Replace `your_super_secret_jwt_key_here` with a strong, random secret key.

## 🚀 Running the Application

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

The server will start on `http://localhost:3000`

## 📚 API Documentation

### Base URL

```
http://localhost:3000
```

### Authentication Endpoints

#### 1. User Signup

- **URL**: `/api/auth/signup`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securepassword123"
  }
  ```
- **Success Response**:
  ```json
  {
    "status": 200,
    "msg": "User Created Successfully",
    "user": {
      "_id": "user_id",
      "name": "John Doe",
      "email": "john@example.com",
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  }
  ```

#### 2. User Login

- **URL**: `/api/auth/login`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "securepassword123"
  }
  ```
- **Success Response**:
  ```json
  {
    "status": 200,
    "msg": "Login Successfully",
    "token": "jwt_token_here"
  }
  ```

#### 3. Health Check

- **URL**: `/`
- **Method**: `GET`
- **Response**:
  ```json
  {
    "status": 200,
    "message": "OK"
  }
  ```

## 📁 Project Structure

```
backend/
├── config/
│   └── db.js                 # Database connection configuration
├── controllers/
│   └── auth.controller.js    # Authentication business logic
├── middlewares/              # Custom middleware functions
├── models/
│   └── User.js              # User data model
├── routes/
│   └── auth.routes.js       # Authentication routes
├── utils/
│   └── generateToken.js     # JWT token generation utility
├── .gitignore               # Git ignore rules
├── bun.lock                 # Bun lock file
├── index.js                 # Application entry point
└── package.json             # Project dependencies and scripts
```

## 🔐 Security Features

- **Password Hashing**: Uses bcrypt with salt rounds for secure password storage
- **JWT Authentication**: Stateless authentication with configurable expiration (7 days)
- **Input Validation**: Basic validation for required fields
- **Environment Variables**: Sensitive data stored securely in environment variables

## 🚧 Development Status

This project currently includes:

- ✅ User authentication (signup/login)
- ✅ MongoDB integration
- ✅ JWT token generation
- ✅ Basic error handling

**Coming Soon** (Based on project name):

- 🔄 URL shortening functionality
- 🔄 URL redirect service
- 🔄 Analytics and click tracking
- 🔄 User dashboard

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon
- `npm test` - Run tests (not implemented yet)

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**

   - Ensure MongoDB is running locally or check your MongoDB Atlas connection string
   - Verify the `MONGODB_URI` in your `.env` file

2. **JWT Secret Error**

   - Make sure `JWT_SECRET` is set in your `.env` file
   - Use a strong, random secret key

3. **Port Already in Use**
   - The default port is 3000. Make sure no other application is using this port
   - You can modify the PORT in `index.js` if needed

## 📄 License

This project is licensed under the ISC License.

## 📞 Support

If you encounter any issues or have questions, please open an issue in the repository.
