class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack  = [];
        const operators = new Map();
        operators.set("+")
        operators.set("-")
        operators.set("/")
        operators.set("*")

        for (let i = 0 ; i < tokens.length ; i++){
            console.log(stack)
            if (operators.has(tokens[i])){
               const a = stack.pop();
               const b = stack.pop();

                switch(tokens[i]){
                    case "+":
                    stack.push(Number(b) + Number(a))
                    break;
                    case "*":
                    stack.push(Number(b) * Number(a))
                    break;
                    case "/":
                    stack.push(parseInt(Number(b) / Number(a)))
                    break;
                    case "-":
                    stack.push(Number(b) - Number(a))
                    break;
                }


            }else{
                stack.push(tokens[i])
            }
        }

    return stack[stack.length-1]
    }
}
