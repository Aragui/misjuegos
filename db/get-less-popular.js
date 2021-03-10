const { db } = require("../tools/init");

exports.getLessPopular = async () => await (await db.collection('games').orderBy('dislikes', 'desc').where('status', '==', true).limit(10).get())
                                                .docs.map(doc => ({id: doc.id, ...doc.data()}));