/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let binary = "";
    while (n > 0){
        binary = binary + n%2;
        n = Math.trunc(n / 2) ;
    }
    
    let counter = 0 ;
    binary = binary.split("");
    while (binary.length > 0 ){
       if  (binary.pop() === "1") counter++;
    }
    
    return counter;

};
