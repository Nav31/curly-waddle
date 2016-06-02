

// This is a random number generator for the MegaMillions Lottery
// It selects 4 unique random numbers range 1 - 75
// Then select 1 from range 1 - 15

var rando = (num) => Math.floor(Math.random() * (num)+1)

// This is to pick 1 number 
var pick1 = () => rando(15)

// This is to pick 4 numbers
var pick4 = () => {
	var result = [];
	for(var i = 0; i < 4; i++) {result.push(rando(75))}
	return result;
}

// This function is going to see if numbers are not repeating in the array
// var nonRepeating = () => pick4().filter((v, i, o) => i === o.indexOf(i))

var repeatAgain = () => {
	let otherArray = pick4();
	for(var i = 0; i < otherArray.length; i++) {
		if (otherArray.indexOf(i) === -1) return otherArray;
		else repeatAgain();
	}
}

// This function only for testing on rnd numbers

for(var i = 0; i< 1000; i++) {console.log(pick4())}

// TODO: Make sure the numbers in pick4 function are unique.
// As in you can't have [1,2,3,1] ie 1 is appearing twice.  
