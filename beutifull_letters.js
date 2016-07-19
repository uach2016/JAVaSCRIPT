//It receives an array with numbers and letters
// and returns it with uppercase vowels and lowercase consonants. Numbers remain unchanged

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
