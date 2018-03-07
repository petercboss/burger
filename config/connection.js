const mysql = require('mysql');

const port = process.env.PORT || 8000;

const connection = mysql.createConnection(process.env.JAWSDB_URL || {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'burgers_db'
});

connection.connect(err => {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
  if (port !== 8000) {
    const sql = 'CREATE TABLE burgers (id int not null auto_increment primary key, burger_name varchar(255) not null, devoured boolean default false)';
    connection.query(sql, (err, result) => {
      if (err) throw err;
      console.log('Table created');
    });
  };
});

module.exports = connection;
