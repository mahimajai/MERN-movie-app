const mongoose = require("mongoose");
const Movie = require("./models/Movie");
const movies = require("./data/imdbTop250.json");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo connected"))
  .catch(err => console.error("Mongo connection error:", err));

async function seedMovies() {
  try {
    await Movie.deleteMany();
    await Movie.insertMany(movies);
    console.log("IMDb Top 250 movies seeded");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seedMovies();
