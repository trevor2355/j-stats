const express = require('express');
const router = express.Router();
const playerController = require('../controllers/players.js');

router.get('/', playerController.getAllPlayers);

module.exports = router;