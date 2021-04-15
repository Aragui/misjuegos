/* const { db } = require("../tools/init")

exports.authorizeGame = async (id) => await db.collection('games').doc(id).update({status: true}); */

const { GameModel } = require("../models/game");

exports.authorizeGame = async (id) => await GameModel.findByIdAndUpdate(id, {authorized: true})