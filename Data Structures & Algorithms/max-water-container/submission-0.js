class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        let left = 0;
        let right = heights.length-1;

        while (left < right){
            let width = right - left;
            let height = Math.min(heights[right],heights[left])

            if (heights[right] > heights[left]){
                left++;
            }else {
                right--;
            }

            if (height*width > max){
                max = height * width;
            }


        }

        return max;
    }
}
