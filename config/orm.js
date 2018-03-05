const connection = require('./connection.js');

const orm = {
    selectAll: (table, cb) => {
        connection.query(`SELECT * FROM ${table}`, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: (table, burger_name, cb) => {
        connection.query(`INSERT INTO ${table} (burger_name) VALUES ("${burger_name}")`, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: (table, condition, cb) => {
      connection.query(`UPDATE ${table} SET { devoured: true } WHERE ${condition}`, (err, result) => {
        if (err) throw err;
        cb(result);
      });
    },
    delete: (table, condition, cb) => {
      connection.query(`DELETE FROM ${table} WHERE ${condition}`, (err, result) => {
        if (err) throw err;
        cb(result);
      });
    }
};

module.exports = orm;
