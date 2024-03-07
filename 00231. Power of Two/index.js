/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let x = 0 ;
    while(Math.pow(2,x) < n) x++;

    return Math.pow(2,x) === n;
};
