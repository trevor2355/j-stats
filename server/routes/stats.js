const express = require('express');
const router = express.Router();
const statController = require('../controllers/stats');

router.get('/:personId', statController.getPlayerStats);

module.exports = router;