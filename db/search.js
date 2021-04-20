/* const { db } = require("../tools/init");

exports.search = async(name) => (await db.collection('games').orderBy('name').startAt(name).endAt(name + '\uf8ff').get()).docs
                                    .map(game => ({id: game.id, ...game.data()})) */

const { GameModel } = require("../models/game");

exports.search = async (title) => await GameModel.find({$text: {$search: title}}).limit(10);