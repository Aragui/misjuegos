const { db } = require("../tools/init");

exports.getSuggested = async () => await (await db.collection('games').orderBy('added', 'desc').where('status', '==', false).get())
                                    .docs.map(doc => ({id: doc.id, ...doc.data()}));