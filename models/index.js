var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");

// Import each model and export an object called exports

module.exports.Book = require('./book.js');
// module.exports.Other = require('./other.js'); // to export Others if needed.
