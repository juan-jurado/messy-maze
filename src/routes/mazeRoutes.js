const express = require('express');
const { mazeController } = require('../controllers/mazeController');

const router = express.Router();

router.post('/shortest-path', mazeController);

module.exports = router;