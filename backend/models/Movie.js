const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
title: {
  type: String,
  required: true
},
description: {
  type: String
},
rating: {
  type: Number
},
year: Number,
releaseDate: {
  type: Date
},
duration: {
  type: Number // minutes
},
reviews: [
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    comment: {
      type: String,
      required: true
    }
  }
],
watchlist: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie"
  }
]},
  { timestamps: true }
);

module.exports = mongoose.model("Movie", movieSchema);
