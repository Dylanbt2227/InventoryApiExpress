const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('');
});

router.get('/inventory', (req, res) => {
  res.render('inventory');
});

module.exports = router;