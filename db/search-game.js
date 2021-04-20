/* const { db } = require("../tools/init");

exports.searchGame = async (name) => await (await db.collection('games').where('name', '==', name).get()).docs
                                                        .map(doc => ({id: doc.id, ...doc.data()}))[0]; */
const { GameModel } = require("../models/game");

exports.search = async (title) => await GameModel.find({ $text: { $search: title } }).limit(10);