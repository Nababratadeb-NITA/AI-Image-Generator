// user.js
//const mongoose = require('mongoose');
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  user_image : String,
  created_at: { type: Date, default: Date.now},
  updated_at: { type: Date, default: Date.now},
});

export const User = mongoose.model('User', userSchema);

//module.exports = User;
export default User;