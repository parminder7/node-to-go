var mongoose = require('mongoose');

var TopicSchema = new mongoose.Schema({
  topicQuestion: String,
  tag: String,
  authorName: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

module.exports = mongoose.model('Topic', TopicSchema);
