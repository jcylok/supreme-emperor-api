const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CommentSchema = mongoose.Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
    },
    body : {
        body: String,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
});


const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;