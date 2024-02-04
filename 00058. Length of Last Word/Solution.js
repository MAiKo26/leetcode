/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const A = s.trim().split(" ") ;
    return A[A.length-1].length;
};
