import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";


import { default as Post } from "../mongodb/models/post.js";


dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//GET ALL POSTS
router.route("/").get(async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Fetching posts failed, please try again",
    });
  }
});

//CREATE A POST
router.post("/", async (req, res) => {
  try {
    const { username, photo, prompt, comments, likes } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);

    const newPost = await Post({
      username,
      photo: photoUrl.secure_url,
      prompt,
      comments,
      likes
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Unable to create a post, please try again", err
    });
  }
});

export default router;
//export const Post = mongoose.model("Post", postSchema);

