const mongoose = require('mongoose');
const SALT_WORK_FACTOR = 10;

const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    image: {
        type: String,
        required: true

    },
    title: {
        type: String,
        required: true
    }

});



const Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;