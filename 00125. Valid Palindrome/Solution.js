/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s= s.replaceAll(/[^a-zA-Z0-9]/g,"").toLowerCase().split("");
    console.log(s);
    while(s.length > 1){
        if( s.pop() != s.shift()) return false;    
    }
    
    return true;
};
