// post.js
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: String,
  created_at: Date,
  updated_at: Date,
});

const postSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  image_url: String,
  caption: String,
  prompt: String,
  created_at: Date,
  updated_at: Date,
  comments: [commentSchema],
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
