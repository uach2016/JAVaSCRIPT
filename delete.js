//It receives an array and returns it without '*' chars

function deleteRubbish( array ) {
	var newArray = [];
	for (var i=0; i<array.length; i++) {
		if (array[i] != '*') {
			newArray.push(array[i]);
		}
	}
	array = newArray;
	return array;
}
	
	