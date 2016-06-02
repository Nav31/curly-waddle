

// This is a random number generator for the MegaMillions Lottery
// It selects 4 unique random numbers range 1 - 75
// Then select 1 from range 1 - 15

var pick4 = () => {
	var result = [];
	var holder = 0;
	for(var i = 0; i < 4; i++) {
		result.push(Math.floor(Math.random() * (75) + 1))
		// if(tempHolder <= 75) result.push(tempHolder);
	}
	return result;
}


var pick1 = () => {
	var result = 0;
	result = Math.floor(Math.random() * (15) + 1)
	return result;
}

