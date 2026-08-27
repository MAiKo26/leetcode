class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let result = [];

        for (let l = 0;l<nums.length;l++){
            let sliced = nums.slice(l,l+k)
            if (sliced.length == k) result.push(Math.max(...sliced))
        }

        return result
    }
}
