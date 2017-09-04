var mongoose = require('mongoose');

var TopicSchema = new mongoose.Schema({
  topicQuestion: String,
  tag: String,
  authorName: String
});

module.exports = mongoose.model('Topic', TopicSchema);
