'use strict';

const express = require('express');
const router = express.Router();
const mega = require('../lotteryRNG/megamillionsRng.js');
const power = require('../lotteryRNG/powerballRng.js');
const lotteryInfo = require('../lotteryRNG/lottery.info.js');
const dailyNums = require('../lotteryRNG/play3and4.js');
const lucky4life = require('../lotteryRNG/lucky4life.js');
const prizeVals = require('../lotteryRNG/scraping.js');

router.get('/megamillions', (req, res, next) => res.json(mega()));
router.get('/megamillonsInfo', (req, res, next) => res.json(lotteryInfo.megaMillions));

router.get('/powerball', (req, res, next) => res.json(power()));
router.get('/powerballInfo', (req, res, next) => res.json(lotteryInfo.powerball));

router.get('/lucky4life', (req, res, next) => res.json(lucky4life()));
router.get('/lucky4lifeInfo', (req, res, next) => res.json(lotteryInfo.lucky4Life));

router.get('/play3', (req, res, next) => res.json(dailyNums.pick3()));
router.get('/play3Info', (req, res, next) => res.json(lotteryInfo.play3));

router.get('/play4', (req, res, next) => res.json(dailyNums.pick4()));
router.get('/play4Info', (req, res, next) => res.json(lotteryInfo.play4));

router.get('/getJackpotVals', prizeVals);


module.exports = router;