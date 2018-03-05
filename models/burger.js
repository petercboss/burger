const orm = require('../config/orm.js');

const burger = {
  all: cb => {
    orm.selectAll('burgers', res => cb(res));
  },
  create: (burger_name, cb) => {
    orm.insertOne('burgers', burger_name, res => cb(res));
  },
  update: (condition, cb) => {
    orm.update('burgers', condition, res => cb(res));
  },
  delete: (condition, cb) => {
    orm.delete('burgers', condition, res => cb(res));
  }
};

module.exports = burger;