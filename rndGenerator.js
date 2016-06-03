'use strict'

const _ = require('lodash');

// This is a random number generator for the MegaMillions Lottery
// It selects 4 unique random numbers range 1 - 75
// Then select 1 from range 1 - 15

// This is to generate a psuedo-random number
var rando = (num) => Math.floor(Math.random() * (num)+1)

// This is to pick 1 number 
var pick1 = () => rando(15)

// This is to pick 4 numbers
var pick5 = () => {
	var result = [];
	for(var i = 0; i < 5; i++) {result.push(rando(75))}
	return result;
}

// This function is going to see if numbers are not repeating in the array
var repeatCheck = () => {
	let numArray = pick5();
	if(_.uniq(numArray).length < 5) repeatCheck();
	else return numArray;
}

var combineThings = () => {
	let first5 = repeatCheck();
	if(first5 === undefined) console.log('tryAgain');
	else return first5.sort().concat(pick1())
}

module.exports = combineThings;

// This function only for testing on rnd numbers only
for(var i = 0; i< 1000; i++) {console.log(combineThings())}
