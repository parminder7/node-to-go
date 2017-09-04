var Topic = require('../model/topic');
var Comment = require('../model/comment');

module.exports.addToTopic = function addToTopicDB(options, callback){
  var newTopic = new Topic({
    topicQuestion: options.question,
    tag: options.tag
  });
  newTopic.save(function (err) {
    if (err) {
      return callback(err);
    }
    // saved!
    console.log('saved to topic');
    return callback(null);
  })
}

module.exports.getAllTopics = function getAllTopics(options, callback){
  Topic.find({}, function(err, topics) {
    if(err)
      return callback(err);
    return callback(null, topics);
  });
}

module.exports.addTopic = function addTopic(options, callback){
  var newTopic = new Topic({
    topicQuestion: options.question,
    tag: options.tag,
    authorName: options.author
  });
  newTopic.save(function (err) {
    if (err) {
      return callback(err);
    }
    // saved!
    console.log('saved to topic');
    return callback(null);
  })
}

module.exports.getTopicById = function getTopicById(options, callback){
  Comment.find({ topic: options._id }).
  exec(function (err, comments) {
    if(err)
      return callback(err);
    //console.log('The comments are an array: ', comments);
    return callback(null, comments);
  });
}

module.exports.addComment = function addComment(options, callback){
  var comment = new Comment({
    body: options.body,
    user: options.user,
    topic: options._id    // assign the _id from the topic
  });
  comment.save(function(err) {
    if(err)
      return callback(err);
    console.log('saved to comment');
    return callback(null);
  });
}
