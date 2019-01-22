const mongoose = require('mongoose');
const con = mongoose.connection;
con.on('error', console.error);
con.once('open', function() {
	console.log("Connected to mongod server");
});

mongoose.connect('mongodb://localhost/hihi');

module.exports = con;
