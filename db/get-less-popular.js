/* const { db } = require("../tools/init");

exports.getLessPopular = async () => await (await db.collection('games').orderBy('dislikes', 'desc').where('status', '==', true).limit(10).get())
                                                .docs.map(doc => ({id: doc.id, ...doc.data()})); */

const { GameModel } = require("../models/game");

exports.getLessPopular = async () => await GameModel.find({}).sort({likes: 1}); 