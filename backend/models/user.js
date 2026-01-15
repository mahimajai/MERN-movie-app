const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  role:{
            type:String,
            enum:["user","admin"],
            default:"user"

  },
  
  password: {
    type: String,
    required: true
  },
  watchlist: { type: mongoose.Schema.Types.ObjectId, 
    ref: "Movie" } // favorites/watchlist
});


module.exports = mongoose.model("User", userSchema);
