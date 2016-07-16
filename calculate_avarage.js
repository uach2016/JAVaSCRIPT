/*THE FOLLOWING FUNCTION CALCULATE THE AVERAGE NUM 
OF AN ARRAY.IT'S EASY, ISN'T IT? JUST SUM 
EVERY .length ELEMENT OF THE ARRAY AND
DIVIDE PER NUM OF ELEMENTS THAT ARRAY HAVE.*/

function calculateAverage( array ){
	var result = 0;
	for(var i=0; i<array.length; i++) {//WE PASS 1 BY 1 FOR EVERY ELEMENT OF THE ARRAY
		result =  result + array[i].length;//WE SUM THE .lenght OF EVERY ELEMENT
	}
	average = result / array.length;//WE DIVIDE THE SUM PER NUM OF ELEMENT ARRAY HAVE
	return average;//GIVE US THE RESULT
}

//WE CHECK OUR FUNCTION
calculateAverage(array_lengths)