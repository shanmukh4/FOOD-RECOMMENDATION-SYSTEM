const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
// const User = require('../modals/user.js')

router.post(
  "/addfav",

  async (req, res) => {
    const {
      email,
      company,
      link,
      location,
      gpu,
      disk,
      ram,
      cpu,
      name,
      id,
      price,
      internal_network_speed,
      external_network_speed,
    } = req.body;
    const mongoURI =
      "mongodb://cloudcompare:cloudcompare@ac-veqngqf-shard-00-00.ltrgyjy.mongodb.net:27017,ac-veqngqf-shard-00-01.ltrgyjy.mongodb.net:27017,ac-veqngqf-shard-00-02.ltrgyjy.mongodb.net:27017/CloudCompare?ssl=true&replicaSet=atlas-wvkdjw-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

    if (!email) {
      return res.status(400).send("email required");
    }

    try {
      await mongoose.connect(mongoURI);
      const result = await mongoose.connection.db
        .collection("users")
        .findOneAndUpdate(
          { email: email },
          {
            $addToSet: {
              favorites: {
                company: company,
                link: link,
                location: location,
                gpu: gpu,
                disk: disk,
                ram: ram,
                cpu: cpu,
                name: name,
                id: id,
                price: price,
                internal_network_speed: internal_network_speed,
                external_network_speed: external_network_speed,
              },
            },
          },
          { returnOriginal: false }
        )
        .then(() => {
          res.status(200).send({ success: true });
        });

    } catch (error) {
      console.error("Error adding item to favorites", error);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.post(
  "/addfav1",

  async (req, res) => {
    const {
      email,
      company,
      link,
      location,
      name,
      maximum_bandwidth,
      maximum_io,
      maximum_size,
      id,
      // prices,

      size,
      io,
      bandwidth,
    } = req.body;
    const mongoURI =
      "mongodb://cloudcompare:cloudcompare@ac-veqngqf-shard-00-00.ltrgyjy.mongodb.net:27017,ac-veqngqf-shard-00-01.ltrgyjy.mongodb.net:27017,ac-veqngqf-shard-00-02.ltrgyjy.mongodb.net:27017/CloudCompare?ssl=true&replicaSet=atlas-wvkdjw-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

    if (!email) {
      return res.status(400).send("email required");
    }

    try {
      await mongoose.connect(mongoURI);
      const result = await mongoose.connection.db
        .collection("users")
        .findOneAndUpdate(
          { email: email },
          {
            $addToSet: {
              storage: {
                company: company,
                link: link,
                location: location,
                name: name,
                maximum_bandwidth: maximum_bandwidth,
                maximum_io: maximum_io,
                maximum_size: maximum_size,
                id: id,
                size: size,
                io: io,
                bandwidth: bandwidth,
              },
            },
          },
          { returnOriginal: false }
        )
        .then(() => {
          res.status(200).send({ success: true });
        });
    } catch (error) {
      console.error("Error adding item to favorites", error);
      res.status(500).send("Internal Server Error");
    }
  }
);
module.exports = router;