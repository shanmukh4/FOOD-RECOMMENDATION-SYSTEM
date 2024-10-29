import mongoose from "mongoose"
const mongoURI =
    "mongodb://Food-RS:shannu123456@cluster0-shard-00-00.hnca5.mongodb.net:27017,cluster0-shard-00-01.hnca5.mongodb.net:27017,cluster0-shard-00-02.hnca5.mongodb.net:27017/Food-RS?ssl=true&replicaSet=atlas-11qy8n-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

  const mongodb = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("MongoDB connected...");

    const fetched_data = await mongoose.connection.db
      .collection("Food_Products")
      .find({})
      .toArray(async (err) => {
        if (err) console.log(err);
        else {
            // console.log(fetched_data);
        }
      });
    global.food_products = fetched_data;
    console.log(fetched_data)

  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default mongodb;
