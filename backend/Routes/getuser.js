const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const mongoURI =
"mongodb://Food-RS:123456@21cluster0-shard-00-00.hnca5.mongodb.net:27017,cluster0-shard-00-01.hnca5.mongodb.net:27017,cluster0-shard-00-02.hnca5.mongodb.net:27017/?ssl=true&replicaSet=atlas-11qy8n-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

router.post(
  "/getuser",

  async (req, res) => {
    try {
      await mongoose.connect(mongoURI);
      console.log("MongoDb connected...");

      const user_data = await mongoose.connection.db
        .collection("users")
        .find({})
        .toArray(async (err) => {
          if (err) console.log("fetch error : ", err);
        });
      global.user_data = user_data;
      // console.log("data is : ", user_data);
      res.send(user_data);
    } catch (error) {
      console.log("MongoDB connection error:", error);
    }
  }
);

module.exports = router;