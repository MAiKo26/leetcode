class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
       const map = new Map 
       map.set("}","{")
       map.set(")","(")
       map.set("]","[")
        const stack = [];

        for (let i = 0 ; i < s.length ; i++){
            console.log(map[s[i]] +" = "+stack[stack.length-1])
            if (!map.has(s[i])){
                stack.push(s[i]);
            }else if(map.get(s[i]) == stack[stack.length-1]){
                stack.pop();
            }else{
                return false;
            }
            console.log(stack)
        }

        if (stack.length > 0){
            return false
        }else{
            return true
        }
    }
}
