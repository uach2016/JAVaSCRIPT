
//the following function gets the letter linked to a spanish DNI
// The functions receives an eight-digit number and returns a single letter.
// The algorithm to calculate the letter is as follows:
// The number is divided by 23 and the remainder is replaced by a letter determined by the following table: 
//	 _____________________________________________________________
//  | 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 |
//	| T R W A G M Y F P D X  B  N  J  Z  S  Q  V  H  L  C  K  E  |
//	|____________________________________________________________|

// To check the code works, the last three equalities will be "true"



function dniLetter( dni ) {


	var index = dni % 23//I get the index number relative with my lockup
	var lockup = 'TRWAGMYFPDXBNJZSQVHLCKE';
	var result = lockup[index]//with my index I get the letter we want
    
    if (dni.toString().length < 8){ return 'Invalid parameter';}//a bit of conditions to use numbers === 8 parameters 
	else if(dni.toString().length > 8){ return 'Invalid parameter';}
	return result;//give us our letter


}
//We can check our code.
console.log( dniLetter( 12345678 ) === 'Z');
console.log( dniLetter( 34667892 ) === 'S');
console.log( dniLetter( 92234488 ) === 'A');