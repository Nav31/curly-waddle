'use strict'

// This is to generate a psuedo-random number
var rando = (num) => Math.floor(Math.random() * (num)+1)

var pick1 = () => "+ ".concat(rando(15));

var pick5 = () => {
	var result = [];
	while(result.length < 5) {		// numbers can't repeat
		var randNum = rando(75);
		if(result.indexOf(randNum) < 0){
			result.push(randNum);
		}
	}
	return result;
}

var combineThings = () => pick5().sort().concat(pick1());

module.exports = combineThings;

