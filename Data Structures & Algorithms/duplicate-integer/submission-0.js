class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numset = Array.of(...new Set(nums));
        return nums.length !== numset.length; 
    }
}
