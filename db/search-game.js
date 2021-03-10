const { db } = require("../tools/init");

exports.searchGame = async (name) => await (await db.collection('games').where('name', '==', name).get()).docs
                                                        .map(doc => ({id: doc.id, ...doc.data()}))[0];