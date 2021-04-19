const {GameModel} = require('../models/game.js')

exports.deleteJuego = async (id) => await GameModel.findByIdAndRemove(id);