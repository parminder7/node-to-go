var user = require('../model/user');

function addUserToDB(options, callback){
  var newUser = new user({
    firstname : options.firstname,
    lastname : options.lastname,
    email : options.email,
    password : options.password
  });
  newUser.save(function (err) {
    if (err) {
      return callback(err);
    }
    // saved!
    console.log('saved a user');
    return callback(null);
  })
}

module.exports.addUserToDB = addUserToDB;