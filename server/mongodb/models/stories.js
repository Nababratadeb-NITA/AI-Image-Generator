// story.js
//const mongoose = require('mongoose');
import mongoose from 'mongoose';

const storySchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  image_url: String,
  created_at: Date,
  expires_at: Date,
});

const Story = mongoose.model('Story', storySchema);

//module.exports = Story;
export default  Story ;