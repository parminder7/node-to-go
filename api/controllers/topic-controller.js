'use strict';

var topiclib = require('../lib/topic-lib');

module.exports.getAllTopics = function getAllTopics(req, res) {
  topiclib.getAllTopics({}, function(err, result){
    if(err)
      res.json({'message': "failed to fetch topics"});
    else
      res.json(result);
  });
}

module.exports.addTopic = function addTopic(req, res) {
  var options = {
    question: req.swagger.params.body.value.topic,
    tag: 'fun',
    author: req.swagger.params.body.value.authorName
  };
  topiclib.addTopic(options, function(err, result){
    if(err)
      res.json({'message': "failed to add topic"});
    else
      res.json(result);
  });
}

module.exports.getTopicById = function getTopicById(req, res) {
  var options = {
    _id: req.swagger.params.topicId.value
  };
  topiclib.getTopicById(options, function(err, result){
    if(err)
      res.json({'message': "failed to fetch comments for topic"});
    else
      res.json(result);
  });
}

module.exports.addComment = function addComment(req, res) {
  var options = {
    body: req.swagger.params.body.value.comment,
    user: req.swagger.params.body.value.authorName,
    _id: req.swagger.params.topicId.value
  };
  topiclib.addComment(options, function(err, result){
    if(err)
      res.json({'message': "failed to add comment"});
    else
      res.json(result);
  });
}