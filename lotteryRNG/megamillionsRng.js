'use strict'

const _ = require('lodash');

// This is a random number generator for the MegaMillions Lottery
// It selects 4 unique random numbers range 1 - 75
// Then select 1 from range 1 - 15

// This is to generate a psuedo-random number
var rando = (num) => Math.floor(Math.random() * (num)+1)

// This is to pick 1 number 
var pick1 = () => "+ ".concat(rando(15));

// This is to pick 4 numbers
var pick5 = () => {
	var result = [];
	while(result.length < 5) {
		var randNum = rando(75);
		if(result.indexOf(randNum) < 0){
			result.push(randNum);
		}
	}
	return result;
}

var combineThings = () => {
	let first5 = pick5();
	if(first5 === undefined) console.log('tryAgain');
	else return first5.sort().concat(pick1())
}

module.exports = combineThings;

// This function only for testing on rnd numbers only
// for(var i = 0; i< 1000; i++) {console.log(combineThings())}
