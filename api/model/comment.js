var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  user: String,
  body: String,
  topic: [{type: mongoose.Schema.Types.ObjectId, ref: 'Topic'}]
});

module.exports = mongoose.model('Comment', CommentSchema)
