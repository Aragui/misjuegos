const mongoose = require("mongoose");

exports.GameModel = mongoose.model('Game', new mongoose.Schema({
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
        default: 0
    },
    authorized: {
        type: Boolean,
        default: false
    }
}))