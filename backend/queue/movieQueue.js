const { Queue } = require("bullmq");
const redis = require("../config/redis");

const movieQueue = new Queue("movieQueue", {
  connection: redis
});

module.exports = movieQueue;
