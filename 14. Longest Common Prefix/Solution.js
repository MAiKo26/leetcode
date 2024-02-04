/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    let prefix = strs[0];
    let changed = true;
    
    while(prefix != ""){
        while (changed){
            changed = false;
        for (let i = 1; i < strs.length;i++){
            if (!strs[i].startsWith(prefix))
            {    
                prefix = prefix.slice(0,-1);
                changed = true
            }
        }
        }
        return prefix;  
    }
    
    return prefix;
    
};
