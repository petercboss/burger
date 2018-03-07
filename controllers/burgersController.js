const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', (req, res) => {
  burger.all( data => res.render('index', { burgers: data }));
});

router.post('/api/burgers', (req, res) => {
  burger.create(req.body.burger_name, (result) => {
    res.json({ id: result.insertId });
  });
});

router.put('/api/burgers/:id', (req, res) => {
  let condition = req.params.id;
  burger.update(condition, (result) => {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } 
    else {
      res.status(200).end();
    };
  });
});

router.delete('/api/burgers/:id', (req, res) => {
  let condition = req.params.id;
  burger.delete(condition, (result) => {
      res.status(200).end();
    });
});

module.exports = router;
