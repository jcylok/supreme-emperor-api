const mongooe = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
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
    // ANCHOR 
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post',
    }],
    dateJoined: {
        type: Date,
        default: Date.now,
    },
    profilePhoto: {
        type: String, 
    },
});


const User = mongoose.model('User', UserSchema);

module.exports = User;