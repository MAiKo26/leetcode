/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
    
    const map = new Map();
    const set = new Set();
    
    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];
        
        if (map.has(charS)) {
            if (map.get(charS) !== charT) {
                return false; 
            }
        } else {
            if (set.has(charT)) {
                return false; 
            }
            map.set(charS, charT); 
            set.add(charT);
        }
    }
    
    return true; 
};
