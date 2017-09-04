var mongoose = require('mongoose');

var FeedbackSchema = new mongoose.Schema({
    userId: String,
    feedbackFor: String,
    title: String,
    feedbackBody: String
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
