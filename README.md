# MERN Image App

A full-stack image posting application built with the **MERN stack**. The application provides user authentication, image upload functionality, and image management through a React frontend and Node.js/Express backend.

## 🚀 Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs
* Multer
* ImageKit
* Cookie Parser
* CORS

## ✨ Features

* User registration and login
* JWT-based authentication
* Password hashing with bcrypt
* Protected backend routes
* Image upload
* Image storage using ImageKit
* MongoDB database integration
* REST API architecture
* React frontend with responsive UI
* Client-side routing
* Axios API integration

## 📁 Project Structure

```text
mern-image-app/
│
├── backend/
│   ├── src/
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── .gitignore
│   ├── package.json
│   ├── index.html
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── vite.config.js
│
└── README.md
```

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Aryan1396/mern-image-app.git

cd mern-image-app
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

Start the backend:

```bash
npm run dev
```

For production:

```bash
npm start
```

### 3. Setup Frontend

Open another terminal:

```bash
cd frontend
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will be available at the URL provided by Vite.

## 🔐 Authentication Flow

```text
User
  ↓
Register / Login
  ↓
Password hashed with bcrypt
  ↓
JWT generated
  ↓
Authenticated Request
  ↓
Protected Backend Route
  ↓
MongoDB
```

JWT is used to authenticate users, while bcryptjs is used to securely hash passwords.

## 🖼️ Image Upload Flow

```text
React Frontend
      ↓
Select Image
      ↓
Axios Request
      ↓
Express API
      ↓
Multer
      ↓
ImageKit
      ↓
Image URL
      ↓
MongoDB
```

Images are uploaded through the backend and stored using ImageKit. The resulting image information can then be associated with the application data.

## 🔌 API

The backend exposes REST APIs for application functionality such as:

```text
Authentication
     ↓
User Registration
User Login
     ↓
Protected Routes
     ↓
Image Operations
```

Refer to the backend source code for the available routes and request formats.

## 🧪 Development

Run both applications separately:

### Backend

```bash
cd backend
npm run dev
```

### Frontend

```bash
cd frontend
npm run dev
```

## 🔒 Environment Variables

Never commit your `.env` file or expose secrets such as:

* MongoDB credentials
* JWT secret
* ImageKit private key
* Other API credentials

Add `.env` to `.gitignore`.

## 📌 Key Learning Outcomes

This project demonstrates practical implementation of:

* MERN stack architecture
* REST API development
* JWT authentication
* Password hashing
* MongoDB and Mongoose
* File upload handling
* Cloud image storage
* React API integration
* Protected routes
* Environment-based configuration

## 👨‍💻 Author

**Aryan Patel**

GitHub: [Aryan1396](https://github.com/Aryan1396)

## 📄 License

This project is created for learning and development purposes.
