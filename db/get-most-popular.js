/* const { db } = require("../tools/init");

exports.getMostPopular = async () => await (await db.collection('games').orderBy('likes', 'desc').where('status', '==', true).limit(10).get())
                                            .docs.map(doc => ({id: doc.id, ... doc.data()})); */

const { GameModel } = require("../models/game");

exports.getMostPopular = async () => await GameModel.find({}).sort({likes: -1}).where({authorized: true});