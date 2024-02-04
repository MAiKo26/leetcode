/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    y = x + " ";
    for (var i = 0 ; i < y.length -1 ; i++)
        {
            if (y[i] != y[(y.length -2 -i )])
                return false;
        }
    return true;
};
