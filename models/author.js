var mongoose = require('mongoose');
  Schema = mongoose.Schema;

// Create Schema
var AuthorSchema = new Schema ({
  name: String,
  alive: Boolean,
  image: String
});

// Create model
var Author = mongoose.model('Author', AuthorSchema);

// Export
module.exports = Author;
