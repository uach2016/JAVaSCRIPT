//It receives an array with numbers and letters and 
//returns it with its items sorted. Numbers on one side and letters on the other.
function sortArray( array ){
	arrayNumber = [];
	arrayString = [];
	
	for (var i = 0; i < array.length; i++) {
		if (typeof array[i] == 'number') {
			arrayNumber.push(array[i]);
			arrayNumber.sort();
		}

		else {
			arrayString.push(array[i]);
			arrayString.sort(function (a, b) {
				return a.toLowerCase().localeCompare(b.toLowerCase());
			});
		}
	}

	array = arrayNumber.concat(arrayString);
	
	return array;
}


