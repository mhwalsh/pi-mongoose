var mongoose = require('mongoose');
var Schema = mongoose.Schema;


///test
//another test

var userSchema = new Schema({
  name: String,
  username: {type: String, unique: true},
  admin: Boolean,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date
});

// users is the name of the collection in the database
// WARNING will lowercase and pluralize collection name
var User = mongoose.model('users', userSchema);

module.exports = User;
