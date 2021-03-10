const { db } = require("../tools/init");

exports.search = async(name) => (await db.collection('games').orderBy('name').startAt(name).endAt(name + '\uf8ff').get()).docs
                                    .map(game => ({id: game.id, ...game.data()}))