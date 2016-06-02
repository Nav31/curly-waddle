

// This is a random number generator for the MegaMillions Lottery
// It selects 4 unique random numbers range 1 - 75
// Then select 1 from range 1 - 15

var pick4 = () => {
	var result = [];
	var holder = 0;
	for(var i = 0; i < 4; i++) {
		result.push(Math.floor(Math.random() * (75) + 1))
	}
	return result;
}


var pick1 = () => {
	var result = 0;
	result = Math.floor(Math.random() * (15) + 1)
	return result;
}

// This function only for testing on rnd numbers

for(var i = 0; i< 1000; i++) {
	console.log(pick4())
}

// TODO: Make sure the numbers in pick4 function are unique.
// As in you can't have [1,2,3,1] ie 1 is appearing twice.  
