const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 5000
})
.then(() => {
  console.log("🔥 MongoDB CONNECTED");
  process.exit();
})
.catch(err => {
  console.error("❌ Mongo ERROR:", err.message);
  process.exit(1);
});
