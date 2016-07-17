/*THE FOLLOWING FUNCTION TAKES A STRING AND
GIVE US EVERY CHARACTER SEPARETE ANG ITS 
SUM 1 BY 1*/

function charFreq( string ) {
	freqCounter = {};//WE KEEP OUR CHARACTER LIST IN THIS OBJECT
	for(var i=0;i< string.length;i++){//WE GO 1 BY 1 FOR EVERY SINGLE CHARACTER
		console.log(i);//PRINT THE INDEX
		console.log(string[i]);//PRINT CHARACTER
		freqCounter[string[i]] = ++freqCounter[string[i]] || 1;//SUM CHARACTER OR IF WE DON'T HAVE ONE GIVE US 1
		console.log(freqCounter[string[i]]);//PRINT HOW MANY CHARACTERS WE HAVE
	
		console.log('----')//SEPARTE EACH FREQUENCY LIST TO ANOTHER
	}
	return freqCounter;
}
// WE CHECK OUR CODE
counter = charFreq("abbabcbdbabdbdbabababcbcbab");
console.log( counter['a'] === 7);
console.log( counter.b === 14);
console.log( counter['c'] === 3);

counter = charFreq("xyyyxyxyxzyxyzyxyxyasdfz");
console.log( counter.x === 7 );
console.log( counter['y'] === 10 );
console.log( counter.z === 3 );
console.log( counter['a'] === 1 );
console.log( counter['s'] === 1 );
console.log( counter.d === 1 );
console.log( counter['f'] === 1 );