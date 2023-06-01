import express from "express";
import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});

const openai = new OpenAIApi(configuration);

router.get("/", (req, res) => {
  res.send("Hello from OpenAI");
});

router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.createImage({
      prompt,
      n: "1",
      size: "1024x1024", // Use lowercase 'x' instead of '*' for the size
      responseFormat: "b64_json", // Use camelCase for the response format
    });

    const image = aiResponse.data.data[0].image.b64; // Access the 'image' property and then 'b64'

    res.status(200).json({ photo: image });
  } catch (error) {
    console.log(error);
    res.status(500).json(error?.response?.data?.error?.message);
  }
});

export default router;
