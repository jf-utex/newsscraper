//file for how the comments will be stored

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    body: {
        type: String
    }
});

var Comment = mongoose.model("Note", CommentSchema);
//the ('Comment' , Comment..) associates with the 'Comment in article.js schema'
module.exports = Comment;
