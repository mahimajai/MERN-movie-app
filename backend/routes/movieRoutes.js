const express = require("express");
const Movie = require("../models/Movie");
const protect = require("../middleware/authMiddleware");
const isAdmin = require("../middleware/adminMiddleware");
const { addReview } = require("../controllers/movieController");

const router = express.Router();

/*
====================================================
1️⃣ SEARCH MOVIES (must be on top)
GET /api/movies/search?q=abc
====================================================
*/
router.get("/search", async (req, res) => {
  try {
    const q = req.query.q;

    if (!q || q.trim() === "") {
      return res.json([]);
    }

    const movies = await Movie.find({
      title: { $regex: q, $options: "i" },
    });

    res.json(movies);
  } catch (err) {
    console.error("Search error:", err);
    res.status(500).json({ message: "Search failed" });
  }
});

/*
====================================================
2️⃣ GET ALL MOVIES (pagination)
GET /api/movies?page=1&limit=10
====================================================
*/
router.get("/", async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const totalMovies = await Movie.countDocuments();
    const movies = await Movie.find().skip(skip).limit(limit);

    res.json({
      page,
      totalMovies,
      totalPages: Math.ceil(totalMovies / limit),
      movies,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch movies" });
  }
});

/*
====================================================
3️⃣ GET SINGLE MOVIE BY ID
GET /api/movies/:id
====================================================
*/
router.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.json(movie);
  } catch (err) {
    res.status(400).json({ message: "Invalid movie ID" });
  }
});

/*
====================================================
4️⃣ ADD REVIEW (logged in user)
POST /api/movies/:id/review
====================================================
*/
router.post("/:id/review", protect, addReview);

router.post("/", protect, isAdmin, async (req, res) => {
  const { title, year, description, rating } = req.body;

  const movie = await Movie.create({
    title,
    year,
    description,
    rating,
  });

  res.status(201).json(movie);
});

/*
====================================================
5️⃣ UPDATE MOVIE (admin only)
PUT /api/movies/:id
====================================================
*/
router.put("/:id", protect, isAdmin, async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.json(movie);
  } catch (err) {
    res.status(400).json({ message: "Update failed" });
  }
});

/*
====================================================
6️⃣ DELETE MOVIE (admin only)
DELETE /api/movies/:id
====================================================
*/
router.delete("/:id", protect, isAdmin, async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.json({ message: "Movie deleted" });
  } catch (err) {
    res.status(400).json({ message: "Delete failed" });
  }
});

module.exports = router;
