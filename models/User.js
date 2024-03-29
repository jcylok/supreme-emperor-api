const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    currentCity: {
        type: String,
        required: [true, 'Current city is required'],
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
    }],
    dateJoined: {
        type: Date,
        default: Date.now,
    },
    profilePhoto: {
        type: String, default:'https://s.pngix.com/pngfile/s/468-4685538_bear-default-avatar-default-avatar-hd-png-download.png'
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;