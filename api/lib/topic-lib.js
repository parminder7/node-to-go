var Topic = require('../model/topic');
var Comment = require('../model/comment');

function addToTopicDB(options, callback){
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

module.exports.addToTopic = addToTopicDB;