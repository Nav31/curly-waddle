'use strict';

const express = require('express');
const router = express.Router();
const lotteryInfo = require('../lotteryRNG/lottery.info.js');
const dailyNums = require('../lotteryRNG/play3and4.js');
const prizeVals = require('../lotteryRNG/scrapedPrizeValues.js');
const prevNums = require('../lotteryRNG/scrapedWinningNums.js');
const luckyNums = require('../lotteryRNG/scrapedLucky.js');
const games = require('../lotteryRNG/games.js');

router.get('/megamillions', (req, res, next) => res.json(games.megaMillions()))
router.get('/megamillonsInfo', (req, res, next) => res.json(lotteryInfo.megaMillions));

router.get('/powerball', (req, res, next) => res.json(games.powerball()));
router.get('/powerballInfo', (req, res, next) => res.json(lotteryInfo.powerball));

router.get('/lucky4life', (req, res, next) => res.json(games.lucky4Life()));
router.get('/lucky4lifeInfo', (req, res, next) => res.json(lotteryInfo.lucky4Life));

router.get('/play3', (req, res, next) => res.json(dailyNums.pick3()));
router.get('/play3Info', (req, res, next) => res.json(lotteryInfo.play3));

router.get('/play4', (req, res, next) => res.json(dailyNums.pick4()));
router.get('/play4Info', (req, res, next) => res.json(lotteryInfo.play4));

router.get('/getJackpotVals', prizeVals);
router.get('/getPreviousWinningNumbers', prevNums);
router.get('/getLuckyNums', luckyNums);

module.exports = router;