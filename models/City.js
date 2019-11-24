const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    country: {
        type: String,
    },
    urlName: {
        type: String,
    },
    picture: {
        type: String,
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
    }],
})


const City = mongoose.model('City', CitySchema);

module.exports = City;