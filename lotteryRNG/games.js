'use strict';

var rando = (num) => Math.floor(Math.random() * (num) + 1)

var pick1 = (n) => "+ ".concat(rando(n));

var pick5 = (gameLimit) => {
	var result = [];
	while(result.length < 5) {		// numbers can't repeat
		let randNum = rando(gameLimit);
		if(result.indexOf(randNum) < 0) result.push(randNum);
	}
	return result;
}

var combineThings = (funcA, funcB) => funcA.sort().concat(funcB);

var megaMillions = () => combineThings(pick5(75), pick1(15));
var powerball = () => combineThings(pick5(69), pick1(26));
var lucky4Life = () => combineThings(pick5(48), pick1(18));

module.exports = {
	megaMillions: megaMillions, 
	powerball: powerball,
	lucky4Life: lucky4Life
};