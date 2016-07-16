//THE FOLLOWING FUNCTION GET THE LONGEST WORD IN AN ARRAY

function findLongestWord( array_words ){
    var i;// THIS IS OUR INDEX TO WORK INTO OUR ARRAY
    var word;//WILL GET OUR LONGEST WORD
    var result = 0;//WILL GET OUR RESULT
    for (i = 0; i < array_words.length; i++) {//WE GO WORD BY WORD THROUG OUR ARRAY
        word = array_words[i].length;//WITH .length WE GET THE LONGEST WORD IN OUR ARRAY
        if (word > result) {//IT HAS TO BE MORE THAN 0.
             result = word;// IF THE CONDITION IS TRUE OUR WORD === TO OUR RESULT
        }
    }
    return result// GIVE US OUR RESULT
}

//CHECK THE CODE
console.log( findLongestWord( ["Richie", "Joanie", "Greg", "Marcia", "Bobby"] ) ===6 );
console.log( findLongestWord( ["Blanka", "Zangief", "Chun Li", "Guile"] ) === 7 );
console.log( findLongestWord( ["Red", "Blue", "Green"] ) === 5 );
*/