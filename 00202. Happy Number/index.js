/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if (n === 1) return true;
    if (n === 4) return false;
    
    n = String(n).split("");
    let total = 0;
    
    while (n.length > 0){
        total = total + Math.pow(Number(n.pop()),2);
    }
    
    return isHappy(total);
};
