const mongose = require('mongoose');

// Connection to mongoDB Atlas
mongose.connect(process.env.CONNECTIION_STRING);

//Connection state
const db = mongose.connection;

// Checking DB Connection
db.on('connected', () => {
	console.log('Successfully connected to DB');
});

db.on('err', () => {
	console.log('Connecting to DB failed.');
});

module.exports = db;
