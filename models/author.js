var mongoose = require('mongoose');
    Schema = mongoose.Schema;

var AuthorSchema = new Schema({
  name: String,
  alive: Boolean,
  image: String
});

// Create Author Model
var Author = mongoose.model('Author', AuthorSchema);

// Export Author from this module
module.exports = Author;
