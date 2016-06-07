'use strict';

var rando = (n) => Math.floor(Math.random() * (n) + 1);

var rngPush = (limit, num) => {
	var result = [];
	while(result.length < limit) result.push(rando(num))
	return result;
}

var pick3 = () => rngPush(3, 9);

var pick4 = () => rngPush(4, 9);

module.exports = {pick4: pick4, pick3: pick3};