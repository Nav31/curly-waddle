'use strict';

const express = require('express');
const router = express.Router();
const mega = require('../rndGenerator.js');

router.get('/megamillions', (req, res, next) => {
	console.log('in the route');
	var toSend = mega();
	console.log(toSend);
	res.json(toSend);
})

module.exports = router;