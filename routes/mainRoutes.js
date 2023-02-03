const express = require('express');
const router = express();
const mainController = require('../controllers/mainController');

router.get('/', mainController.homeShop);

module.exports = router;

