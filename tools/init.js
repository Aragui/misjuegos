const admin = require('firebase-admin');

const {config} = require('./config.js');

admin.initializeApp({
    credential: admin.credential.cert(config),
    storageBucket: 'web-prof.appspot.com'
});

const db = admin.firestore();
const storage = admin.storage().bucket();
const timestamp = admin.firestore.FieldValue.serverTimestamp;
const fieldValue = admin.firestore.FieldValue;

module.exports = {db, storage, timestamp, fieldValue};