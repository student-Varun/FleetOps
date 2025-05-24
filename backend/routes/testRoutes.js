const express = require('express');
const { controler } = require('../controllers/testControler');

const router = express.Router();

router.get('/get', controler);

module.exports = router;
