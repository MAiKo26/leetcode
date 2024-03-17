/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let s = String(num);
    if (s.length === 1) return num;
    s = s.split("");
    let sum = 0 ;
    while(s.length > 0){
        sum = sum + Number(s.pop());
    }
    
    return addDigits(sum);
};
