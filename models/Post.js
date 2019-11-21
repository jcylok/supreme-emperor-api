const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PostSchema = mongoose.Schema({
    city: {
        type: String,
        required: [true, 'City is required'],
    },
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    // author: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    // }],
    body: {
        type: String,
        required: [true, 'Body is required'],
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
    // ANCHOR 
    // comment: [],
})

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;