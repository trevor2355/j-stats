const mysql = require('mysql');
const config = require('./config.js');

const connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL || config);

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;