'use strict';
var Feedback = require('../model/feedback');

module.exports.addFeedbackForUser = function (options, callback) {
    var newFeedback = new Feedback({
        userId : options.userId,
        feedbackFor : options.feedbackFor,
        title : options.title,
        feedbackBody : options.feedbackBody
    });

    newFeedback.save(function (err, data) {
        if(err) {
            return callback(err);
        }
        console.log('Save feedback');
        return callback(null, data);
    })
};

module.exports.getFeedbacksForUser = function (options, callback) {

    Feedback.find({userId : options.userId }, function (err, feedbacks) {
        if(err) {
            return callback(err);
        }
        console.log('return feedbacks');
        return callback(null, feedbacks);
    })
};