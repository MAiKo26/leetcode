/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    s = s.split(" ");
    pattern = pattern.split("");
    if (s.length !== pattern.length) return false;
    if (new Set(s).size !== new Set(pattern).size) return false;
    for (let i = 0 ; i < s.length ; i++){
        for (let j = 0 ; j < s.length ; j++){
            if (s[i] === s[j])
                if (pattern[i] !== pattern[j])
                    return false;    
        }
        
    }
    
    return true;
};
