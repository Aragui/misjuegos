const { db, fieldValue } = require("../tools/init");

exports.likeGame = async (id) => await db.collection('games').doc(id).update({likes: fieldValue.increment(1)})