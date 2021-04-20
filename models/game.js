const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 1
    },
    authorized: {
        type: Boolean,
        default: false
    }
});

gameSchema.index({title: 'text'});

exports.GameModel = mongoose.model('Game', gameSchema)