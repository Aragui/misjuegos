/* const { db } = require("../tools/init");

exports.getAll = async () => await (await db.collection('games').orderBy('added', 'desc').where('status', '==', true).get()).docs
                                            .map(doc => ({id: doc.id, ... doc.data()})); */

const { GameModel } = require("../models/game");

exports.getAll = async () => await GameModel.find({}).sort({_id: -1});