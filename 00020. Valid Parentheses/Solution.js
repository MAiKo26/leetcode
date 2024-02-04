/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    if (s.length%2 !=0)
        return false;

    if (s[0] != "(" && s[0] != "[" && s[0] != "{")
        return false;
    
    s = s.split("");

    let changed = true;
    
    while(s.length>0){
        changed = false;
        for (let i = 0;i<s.length;i++){
            if ((s[i] == "(") && (s[i+1] == ")")) {s.splice(i,2); changed=true;}
            if ((s[i] == "{") && (s[i+1] == "}")) {s.splice(i,2); changed=true;}
            if ((s[i] == "[") && (s[i+1] == "]")) {s.splice(i,2); changed=true;}
        }
        if (!changed){
            return false;
        } 
    }
    
    
    return true;        
};
