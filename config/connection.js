const mysql = require('mysql');

const connection = mysql.createConnection(process.env.JAWSDB_URL || {
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'burgers_db'
});

connection.connect(err => {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
