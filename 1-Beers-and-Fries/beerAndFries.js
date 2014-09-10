var beerAndFries = function(input) {
	var beers = [];
	var fries = [];
	for (var i = 0; i< input.length; ++i) {
		if (input[i].type == 'beer') {
			beers.push(input[i].score);
		} else {
			fries.push(input[i].score);
		}
	}
	beers.sort(sortFunction);
	fries.sort(sortFunction);

	var result = 0;
	for (var i = 0; i<beers.length; ++i) {
		result += beers[i] * fries[i];
	}

	return result;
}

var sortFunction = function(a, b) {
	a = parseInt(a);
	b = parseInt(b);

	return a < b;
}

module.exports.beerAndFries = beerAndFries;