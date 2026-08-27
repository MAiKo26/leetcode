class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = [];
        let max = 0;

        for (let i = 0 ; i < heights.length ; i++){
            let el = {
                index:i,
                height:heights[i]
            }
            if (stack.length > 0){
                while (stack.length > 0 && el.height < stack[stack.length - 1].height) {
                    let calel = stack.pop();
                    let width = i - calel.index;
                    let newMax = width * calel.height;
                    max = Math.max(max, newMax);
                    el.index = calel.index;
                }

            }

            stack.push(el);
        }
        console.log(stack)
        let sl = stack.length;
        for (let i = 0 ; i < sl;i++){
            let calel = stack.pop();
            console.log("calculating the element ; ",calel)
            let newMax = (heights.length - calel.index) * calel.height;
            console.log("the new max is : ",newMax," and the old max is ",max);
            if (max < newMax){
                console.log("Updating max to ",newMax," from ",max)
                max = newMax 
            }
        }

        console.log(stack);
        console.log(max);

        return max

    }
}
