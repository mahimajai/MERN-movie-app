const Movie = require("../models/Movie");

exports.addReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;

    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    movie.reviews.push({
      user: req.user._id,   // ✅ FINAL FIX
      rating,
      comment
    });

    await movie.save();

    res.status(201).json({ message: "Review added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
