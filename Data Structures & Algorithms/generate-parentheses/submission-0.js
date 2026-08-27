class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const result = []
        const stack = []
        let open = 0;
        let close = 0;


        function recc(open,close){
            if (open == close && open == n){
                console.log("gang")
                result.push(stack.join(""))
                return 
            }
            if (open < n){
                stack.push("(")
                recc(open+1,close)
                stack.pop()
            }
            if (close < open){
                stack.push(")")
                recc(open,close+1)
                stack.pop()
            }
        }

        recc(0,0);

        return result;
    }
}
