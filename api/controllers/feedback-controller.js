'use strict';
var feedbacklib = require('../lib/feedback-lib');

module.exports.addFeedbackForUser = function (req,res) {
    var options = {
        title: req.swagger.params.body.value.title,
        feedbackBody: req.swagger.params.body.value.feedbackBody,
        feedbackFor: req.swagger.params.body.value.feedbackFor,
        userId: req.swagger.params.userId.value
    };
    feedbacklib.addFeedbackForUser(options, function(err, data) {
        if(err)
            res.json({'message': "Feedback for the user cannot be added"});
        else
            res.json(data);
    });
};

module.exports.getFeedbacksForUser = function (req,res) {
    var options = {
        userId: req.swagger.params.userId.value
    };
    feedbacklib.getFeedbacksForUser(options, function(err, data) {
        if(err)
            res.json({'message': "Feedback for the user cannot be retrieved"});
        else
            res.json(data);
    });
};