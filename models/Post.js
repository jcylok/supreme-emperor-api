const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = mongoose.Schema({
    city: {
        type: Schema.Types.ObjectId,
        ref: 'City',
    },
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    author: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    body: {
        type: String,
        required: [true, 'Body is required'],
    },
    photoUrl: {
        type: String,
        required: [true, 'photoUrl is required'],
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
})

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;