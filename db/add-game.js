const { db, timestamp } = require("../tools/init");

exports.addGame = async (name, description, urlPhoto) => await db.collection('games').add({
                                                    name,
                                                    description,
                                                    image: urlPhoto,
                                                    added: timestamp(),
                                                    likes: 0,
                                                    dislikes: 0,
                                                    status: false
                                                });