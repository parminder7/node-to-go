var mongoose = require('mongoose');
var db = mongoose.connection;

function connect(){
  mongoose.connect('mongodb://localhost:27017/test', {server:
    {auto_reconnect:true, socketOptions: {keepAlive: 1}}});
  db = mongoose.connection;

  db.on('connecting', function() {
    console.log('Connecting to MongoDB...');
  });
  db.on('error', function(error) {
    console.log(error.toString());
    mongoose.disconnect();
  });
  db.once('connected', function() {
    console.log('MongoDB connected.');
  });
  db.once('open', function() {
    console.log('MongoDB connection opened.');
  });
  db.once('reconnected', function () {
    console.log('MongoDB reconnected.');
  });
  db.once('disconnected', function () {
    console.log('MongoDB disconnected.');
    setTimeout(connect, 10000);
  });
}

module.exports.connect = connect;