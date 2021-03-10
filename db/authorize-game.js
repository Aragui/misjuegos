const { db } = require("../tools/init")

exports.authorizeGame = async (id) => await db.collection('games').doc(id).update({status: true});