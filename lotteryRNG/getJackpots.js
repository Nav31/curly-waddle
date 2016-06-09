'use strict';

const cheerio = require('cheerio');
const request = require('request');

const url = "https://www.ctlottery.org/Modules/Games/default.aspx?id=5";

var makeRequest = () => {
	request(url, (err, res, body) => {
		if(!err) {
			let $ = cheerio.load(body)
			let cat = $("#overlay_4").text()
			console.log(cat)
		}
	})
} 

makeRequest();