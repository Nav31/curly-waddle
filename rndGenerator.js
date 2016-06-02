'use strict'

const _ = require('lodash');

// This is a random number generator for the MegaMillions Lottery
// It selects 4 unique random numbers range 1 - 75
// Then select 1 from range 1 - 15

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
// var nonRepeating = () => pick5().filter((v, i, o) => i === o.indexOf(i))
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

// This function only for testing on rnd numbers

for(var i = 0; i< 1000; i++) {console.log(combineThings())}

// TODO: Make sure the numbers in pick5 function are unique.
// As in you can't have [1,2,3,1] ie 1 is appearing twice.  
