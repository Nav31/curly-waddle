'use strict';

const cheerio = require('cheerio');
const request = require('request');
const express = require('express');
const router = express.Router();
const url = "https://vtlottery.com/games/lucky-life"

router.use((req, response, next) => {
	request(url, (err, res, body) => {
		if(!err) {
			let $ = cheerio.load(body)
			let nums = []
			$('.ballWrapper').each(function (idx, elem) {nums.push($(this).text())})
			nums.splice(6)
			response.json(nums);
		}
	});
});


module.exports = router;