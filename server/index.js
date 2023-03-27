import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/jarvis", dalleRoutes);

app.get("/", (req, res) => {
  res.send("Hello From Backend");
});

const startServer = () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(5000, () => console.log("Server is running on port 5000"));
  } catch (error) {
    console.log(error);
  }
};

startServer();
