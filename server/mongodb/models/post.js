// post.js
//const mongoose = require('mongoose');
import mongoose from 'mongoose';


const commentSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: String,
  created_at: { type: Date, default: Date.now},
  updated_at: { type: Date, default: Date.now},
});

const postSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  username: String,
  photo: String,
  prompt: String,
  created_at: { type: Date, default: Date.now},
  updated_at: { type: Date, default: Date.now},
  comments: [commentSchema],
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

export const Post = mongoose.model('Post', postSchema);

//module.exports = Post;
export default Post;
