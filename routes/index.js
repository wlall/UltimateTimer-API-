var express = require('express');
var router = express.Router();

router.get('/health', (req, res) => {
  res.json({ healthy: true });
});

router.get('/time', (req, res) => {
  const time = new Date().toLocaleTimeString();
  res.json({ time: time });
});

module.exports = router;
