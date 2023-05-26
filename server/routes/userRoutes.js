import express from "express";
const router = express.Router();

import {default as User} from "../mongodb/models/user.js";

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
  const { name, email, image } = req.body;
  const user = new User({ name, email, image });
  await user.save();
  res.json({ message: "User created successfully", user });
});

// Update an existing user
router.put("/:id", async (req, res) => {
  const { name, email, image } = req.body;
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { name, email, image },
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
