import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
//import bodyParser from "body-parser";

import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";
/* `import userRoutes from "./routes/userRoutes.js";` is importing the `userRoutes` module from the
`./routes/userRoutes.js` file. This module contains the routes for handling user-related requests in
the API. The imported module is then used in the `app.use("/api/v1/user", userRoutes);` middleware
to handle requests to the `/api/v1/user` endpoint. */
import userRoutes from "./routes/userRoutes.js";
//import storyRoutes from "./routes/storyRoutes.js";
import { router as storyRoutes } from "./routes/storyRoutes.js";




dotenv.config();

const app = express();
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());

app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/jarvis", dalleRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/story",storyRoutes);

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
