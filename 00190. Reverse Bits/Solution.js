/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let binary = "";
    while (n > 0){
        binary = binary + n%2;
        n = Math.trunc(n / 2) ;
    }
    while (32-binary.length > 0){
        binary = binary + 0;
    }
    binary = binary.split("");
    let output = 0;
    let i = -1;
    while (binary.length > 0){
        i++;
        output = output + (Math.pow(2,i) * binary.pop())
    }
    
    return output;
};
