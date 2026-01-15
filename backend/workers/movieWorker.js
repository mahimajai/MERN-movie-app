const { Worker } = require("bullmq");
const redis = require("../config/redis");

new Worker(
  "movieQueue",
  async (job) => {
    console.log("Processing job:", job.name);
    console.log(job.data);
  },
  {
    connection: redis
  }
);
