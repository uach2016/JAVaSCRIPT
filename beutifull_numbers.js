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


