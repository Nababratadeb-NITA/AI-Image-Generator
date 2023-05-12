// message.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  sender_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  receiver_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: String,
  created_at: Date,
  updated_at: Date,
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;