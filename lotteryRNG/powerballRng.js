'use strict';

var rando = (num) => Math.floor(Math.random() * (num) + 1);

var pick1 = () => "+ ".concat(rando(26));

var pick5 = () => {
	var result = [];
	while(result.length < 5) {
		let randNum = rando(69);
		if(result.indexOf(randNum) < 0) {
			result.push(randNum);
		}
	}
	return result;
}

var combineThings = () => {
	let first5 = pick5();
	if(first5.length < 5) console.log("error")
	else return first5.sort().concat(pick1()) 
}

module.exports = combineThings;