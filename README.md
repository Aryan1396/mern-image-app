# MERN Private Photo Gallery

A full MERN stack app: JWT auth with hashed passwords, per-user private image posts (title + image + category), and a classic/modern React UI.

## Folder structure

```
mern-image-app/
├── backend/
│   ├── src/
│   │   ├── config/db.js            # MongoDB connection
│   │   ├── models/User.js          # bcrypt password hashing lives here
│   │   ├── models/Post.js          # every post has a `user` owner field
│   │   ├── middleware/auth.js      # verifies JWT, attaches req.user
│   │   ├── middleware/upload.js    # multer image upload config
│   │   ├── controllers/authController.js
│   │   ├── controllers/postController.js  # all queries filtered by req.user._id
│   │   ├── routes/authRoutes.js
│   │   └── routes/postRoutes.js
│   ├── uploads/                    # uploaded images are stored + served from here
│   ├── server.js                   # app entry point
│   └── .env.example
└── frontend/
    ├── src/
    │   ├── api/                    # axios instance + reusable API call functions
    │   ├── context/AuthContext.jsx # global auth state (user, login, logout, register)
    │   ├── components/             # reusable UI: Button, TextInput, PostCard, PostForm, etc.
    │   ├── pages/                  # Login, Register, Dashboard
    │   └── App.jsx                 # routes + ProtectedRoute guard
    └── .env.example
```

## How privacy is enforced

- Every `Post` document stores a `user` field (the owner's id).
- `GET /api/posts` always runs `Post.find({ user: req.user._id })` — it is structurally impossible to fetch someone else's posts through this endpoint.
- `DELETE /api/posts/:id` looks up `{ _id, user: req.user._id }` together, so you can't delete (or even detect the existence of) another user's post.
- The JWT lives in an **httpOnly cookie**, so client-side JS/XSS can't read or steal it.

## Setup

### 1. Backend

```bash
cd backend
cp .env.example .env      # then edit MONGO_URI / JWT_SECRET as needed
npm install
npm run dev                # requires nodemon (npm i -g nodemon), or use `npm start`
```

Make sure MongoDB is running locally, or set `MONGO_URI` to an Atlas connection string.

### 2. Frontend

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

Visit `http://localhost:5173`, register a user, log in, and add photos — they'll appear in the grid immediately after upload.

## Notes / where to extend

- **Image storage**: currently local disk via Multer, served from `/uploads`. Swap `middleware/upload.js` + `postController.js`'s `imageUrl` construction for Cloudinary/S3 when you're ready for production (local disk storage doesn't survive most cloud host redeploys).
- **The "random" input field**: modeled as `category` on the `Post` schema and in `PostForm.jsx` — rename freely, or add more fields the same way (schema → controller destructure → form input).
- **Password reset / email verification**: not included — ask if you want it added.
