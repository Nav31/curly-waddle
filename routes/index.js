'use strict';

const express = require('express');
const router = express.Router();
const mega = require('../rndGenerator.js');

router.get('/megamillions', (req, res, next) => res.send(combineThings());)

module.exports = router;