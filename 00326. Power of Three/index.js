/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let x = 0 ;
    while(Math.pow(3,x) < n) x++;

    return Math.pow(3,x) === n;

};
