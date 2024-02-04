/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var l = digits.length -1 ;
    while (l > -1){
        if (digits[l] != 9){
            digits[l] = digits[l] +1;
            return digits;
        }

        digits[l] = 0 ;
        
                if (l == 0){
            digits.unshift(1);
            return digits;
                 }
        
        
        l--;
        
        
    }
};
