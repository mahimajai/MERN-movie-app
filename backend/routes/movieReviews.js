const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie"); // assuming you have Movie model

// Add a review
router.post("/:movieId/review", async (req, res) => {
  try {
    const { movieId } = req.params;
    const { userId, rating, comment } = req.body;

    const movie = await Movie.findById(movieId);
    if (!movie) return res.status(404).json({ msg: "Movie not found" });

    movie.reviews.push({ user: userId, rating, comment });
    await movie.save();

    res.json({ msg: "Review added", reviews: movie.reviews });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all reviews for a movie
router.get("/:movieId/reviews", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.movieId);
    if (!movie) return res.status(404).json({ msg: "Movie not found" });
    res.json(movie.reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
