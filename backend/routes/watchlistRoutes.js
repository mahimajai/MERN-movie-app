const express = require("express");
const protect = require("../middleware/authMiddleware");
const Movie = require("../models/Movie");
const User = require("../models/user");

const router = express.Router();

// ADD to watchlist
router.post("/:movieId", protect, async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user.watchlist.includes(req.params.movieId)) {
    user.watchlist.push(req.params.movieId);
    await user.save();
  }

  res.json({ message: "Added to watchlist" });
});

// GET watchlist
router.get("/", protect, async (req, res) => {
  const user = await User.findById(req.user.id).populate("watchlist");
  res.json(user.watchlist);
});

module.exports = router;
