/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    let x = 0 ;
    while(Math.pow(4,x) < n) x++;

    return Math.pow(4,x) === n;

};
