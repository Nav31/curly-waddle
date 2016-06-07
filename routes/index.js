'use strict';

const express = require('express');
const router = express.Router();
const mega = require('../lotteryRNG/megamillionsRng.js');
const power = require('../lotteryRNG/powerballRng.js');
const lotteryInfo = require('../lotteryRNG/lottery.info.js');
const dailyNums = require('../lotteryRNG/play3and4.js');

router.get('/megamillions', (req, res, next) => res.json(mega()))
router.get('/powerball', (req, res, next) => res.json(power()))
router.get('/powerballInfo', (req, res, next) => res.json(lotteryInfo.powerballOdds))
router.get('/megamillonsInfo', (req, res, next) => res.json(lotteryInfo.megamillionsOdds))
router.get('/play3', (req, res, next) => res.json(dailyNums.pick3()));

module.exports = router;