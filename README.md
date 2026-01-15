# MERN Movie App 

A full-stack MERN (MongoDB, Express, React, Node.js) Movie Application with authentication, admin controls, movie search, movie details, and watchlist functionality.

---
## features

###  User
- Register & Login (JWT based authentication)
- View all movies
- Search movies by name
- View movie details
- Add / Remove movies from Watchlist
- Watchlist accessible only when logged in

###  Admin
- Admin login
- Add new movies
- Update movie details
- Delete movies
- Admin-only routes protected

---

##  Tech Stack

### Frontend
- React
- React Router DOM
- Axios
- Context API

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication

---

## Folder Structure


binnys-assignment/
│
├── backend/
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── middleware/
│ ├── server.js
│ └── .env
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ ├── context/
│ │ ├── api/
│ │ └── App.jsx
│ └── package.json
│
└── README.md


---

##  Environment Variables

Create a `.env` file inside **backend/**

```env
PORT=5000
MONGO_URI=mongodb+srv://draupadijain8591_db_user:wSbNdp9C8hkV63AQ@cluster0.3vylp8c.mongodb.net/?appName=Cluster0
JWT_SECRET=mern_movie_app_secret_2026

## How to Run the Project (IMPORTANT)
## Backend
cd backend
npm install
npm run dev


Backend runs on:

http://localhost:5000

## Frontend
cd front
npm install
npm run dev


Frontend runs on:

http://localhost:5173

##Admin Access

To make an admin:

Update user in MongoDB

isAdmin: true


Admin can see:

Add Movie option

Edit / Delete movies

## API Endpoints
Movies

GET /api/movies

GET /api/movies/:id

GET /api/movies/search?q=movieName

POST /api/movies (Admin)

PUT /api/movies/:id (Admin)

DELETE /api/movies/:id (Admin)

Auth

POST /api/auth/register

POST /api/auth/login

Watchlist

GET /api/watchlist

POST /api/watchlist/:movieId

DELETE /api/watchlist/:movieId






