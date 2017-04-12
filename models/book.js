// This will be used to create schema and model for books
var mongoose = require('mongoose');

// Books will have the following attributes: title, author, image, release_date

// Book Schema
var Schema = mongoose.Schema;

var BookSchema = new Schema({
     title: String,
     author: {
       type: Schema.Types.ObjectId,
       ref: 'Author'
     },
     image: String,
     releaseDate: String
 });


// Create Book Model
 var Book = mongoose.model('Book', BookSchema);


 // Export Book from this module
module.exports = Book;
