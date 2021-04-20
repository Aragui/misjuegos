/* const { db } = require("../tools/init");

exports.getSuggested = async () => await (await db.collection('games').orderBy('added', 'desc').where('status', '==', false).get())
                                    .docs.map(doc => ({id: doc.id, ...doc.data()})); */

const { GameModel } = require("../models/game");

exports.getSuggested = async () => await GameModel.find({authorized: false}).where({authorized: false});