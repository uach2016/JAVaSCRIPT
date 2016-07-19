//I ADD A FEW FUNCTIONS TO WORK WITH AN ARRAY
//YOU CAN FIND EVERY ONE SEPARETE IN MY GITHUB ACCOUNT INSIDE MY JAVASCRIPT FOLDER.

function arrayAwesomenator( array ) 
{
	array = deleteRubbish( array );
	array = arrangeElements( array );
	array = beautifyLetters( array );
	array = beautifyNumbers( array );
	array = sortArray( array );
	array = arrayToString( array );

	return array;
}

//It receives an array and returns it without '*' chars
//Example:  deleteRubbish(['a',1,'*',5]) returns ['a',1,5]
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
	
//It receives an array with numbers and letters mixed and returns it with its items arrange:
//First goes the numbers and then the letters. The order of the elements together does not matter.
//Example: arrangeElements(['B', 'a', 4 , 23, 'J']) returns [23, 4, 'B', 'a', 'J']

function arrangeElements( array ) {
	array = array.sort();
	return array;
}

//It receives an array with numbers and letters and returns it with uppercase vowels and lowercase consonants. Numbers remain unchanged
//Example: beautifyLetters([1,5,7,'a','J',p,'E']) returns [1,5,7,'A','j',p,'E']

function beautifyLetters( array ) {
    for (var i=0; i<array.length; i++) {
        if(typeof array[i] != 'number' ) {
            array[i] = array[i].toLocaleLowerCase()
            if(array[i] === 'a' || array[i] === 'e' || array[i] === 'i' || array[i] === 'o' || array[i] === 'u') {
                array[i] = array[i].toLocaleUpperCase();
            }
        }
    }
    return array;
}

//It receives an array with numbers and letters and returns it with its numbers beautified. Letters remain unchanged
//Beautify process is to reduce a number into a single digit number by adding all its digits together: 
// 123 = 6 because 1+2+3 = 6
// 9 = 9
// 9956 = 2 because 9+9+5+6 = 29 -> 2+9 = 11 -> 1+1 = 2
// 793 = 1 because 7+9+3 = 19 -> 1+9 = 10 -> 1+0 = 1
//Example: beautifyNumbers([23,59, 4,'A','b']) returns [5, 5, 4, 'A', 'b']


function beautifyNumbers( array ) {
    for (var i=0; i<array.length; i++) {
        if(typeof array[i] === 'number' && array[i] > 9) {
            while (array[i] > 9) {
                var result = 0;
                var string = array[i].toString();
                var stringArray = string.split('');
                for (var a=0; a<stringArray.length; a++) {
                    result += Math.floor(stringArray[a]);
                }
                array[i] = result;
            }
        }
    }
    return array;
}

//It receives an array with numbers and letters and returns it with its items sorted. Numbers on one side and letters on the other.
//Example: sortArray([5,5, 4, 1, 'j', A','b', 'E']) returns [1, 4, 5, 5, 'A', 'b', 'E', 'j']

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

//It receives an array and returns a string with all its elements.
//Example: arrayToString([1, 4, 5, 5, 'A', 'b', 'E', 'j']) returns "1455AbEj"

function arrayToString( array ) {
    array = array.join('');
    return array;
}

	
//WE CHECK OUR CODE
console.log(arrayAwesomenator(["a", 6, "B", "F", "*", 8, 78, "J" ]) === "668Abfj");
console.log(arrayAwesomenator(["*", "j", 6, "A", "F", "*", 8, "C", "b", "a", 78, "J", 43523, 1111, "r", "q", "y" ]) === "46688AAbcfjjqry");


