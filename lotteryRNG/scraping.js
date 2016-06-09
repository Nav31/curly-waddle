'use strict';

const cheerio = require('cheerio');
const request = require('request');
const express = require('express');
const router = express.Router();
const url = "https://www.usamega.com/"

router.use((req, response, next) => {
	request(url, (err, res, body) => {
		if(!err) {
			let $ = cheerio.load(body)
			let jackpotArray = $(".JackpotText").text().split(" ")
			response.json(jackpotArray);
		}
	});
});

module.exports = router;