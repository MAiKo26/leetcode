/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n < 2) return n;
    return recursiveCall(n, 1);
};

function recursiveCall(x, pas, acc = [0, 1]) {
    if (x - pas < 0) {
        return acc[0];
    }
    if (x - pas === 0) {
        return acc[0] + acc[1];
    }
    return recursiveCall(x - pas, 1, [acc[1], acc[0] + acc[1]]);
}

