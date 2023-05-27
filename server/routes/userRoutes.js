import express from "express";
const router = express.Router();

import { default as User } from "../mongodb/models/user.js";

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Fetching posts failed, please try again",
    });
  }
});

// Get a specific user by ID
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

// Create a new user
router.post("/", async (req, res) => {
  try {
    const { username, email, user_image } = req.body;
    const user = new User({ username, email, user_image });
    await user.save();
    res.json({ message: "User created successfully", user });
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error, email already exists
      res.status(400).json({
        success: false,
        message: "Email address is already registered",
      });
    } else {
      // Other error occurred
      res.status(500).json({
        success: false,
        message: "An error occurred while creating the user",
      });
    }
  }
});

// Update an existing user
router.put("/:id", async (req, res) => {
  const { username, email, user_image } = req.body;
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { username, email, user_image },
    { new: true }
  );
  res.json({ message: "User updated successfully", user });
});

// Delete an existing user
router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted successfully" });
});

export default router;
