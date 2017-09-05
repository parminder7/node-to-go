var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String
});

module.exports = mongoose.model('User', UserSchema)