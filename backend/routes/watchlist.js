const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Movie = require("../models/Movie");

// Add to watchlist
router.post("/:userId/add/:movieId", async (req, res) => {
  try {
    const { userId, movieId } = req.params;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ msg: "User not found" });

    if (!user.watchlist.includes(movieId)) user.watchlist.push(movieId);
    await user.save();

    res.json({ msg: "Movie added to watchlist", watchlist: user.watchlist });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Remove from watchlist
router.delete("/:userId/remove/:movieId", async (req, res) => {
  try {
    const { userId, movieId } = req.params;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ msg: "User not found" });

    user.watchlist = user.watchlist.filter(id => id.toString() !== movieId);
    await user.save();

    res.json({ msg: "Movie removed from watchlist", watchlist: user.watchlist });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get user watchlist
router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate("watchlist");
    if (!user) return res.status(404).json({ msg: "User not found" });

    res.json(user.watchlist);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



module.exports = router;
