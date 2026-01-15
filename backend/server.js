const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
require("./workers/movieWorker");
const movieReviews = require("./routes/movieReviews");



// 🔹 Routes import upar
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const app = express(); 
const movieRoutes = require("./routes/movieRoutes");
const watchlistRoutes = require("./routes/watchlist");




// 🔹 Middlewares
app.use(cors());
app.use(express.json());

// 🔹 Routes yahan use hote hain
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/movies", movieReviews);
app.use("/api/watchlist", require("./routes/watchlistRoutes"));

// 🔹 DB connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () =>
      console.log("Server running on port 5000")
    );
  })
  .catch(err => console.log(err));

// 🔹 Test route
app.get("/", (req, res) => {
  res.send("API Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
