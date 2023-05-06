import mongoose from "mongoose";

const User = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String, required: true },
  id: { type: String, unique: true },
});

const userSchema = mongoose.model("User", User);

export default userSchema;
