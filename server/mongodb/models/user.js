// user.js
//const mongoose = require('mongoose');
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  user_image : String,
  created_at: Date,
  updated_at: Date,
});

export const User = mongoose.model('User', userSchema);

//module.exports = User;
export default User;