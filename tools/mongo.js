const mongoose = require('mongoose');

const url = process.env.MONGO_URL;

mongoose.connect(`${url}`, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.once('open', () => {
    console.log('Mongodb ON');
})



