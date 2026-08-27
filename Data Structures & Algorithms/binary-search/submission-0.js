class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let start = 0;
        let end = nums.length;

        while(start < end){
            let index = Math.floor((start+end)/2)
            if (nums[index] === target) return index
            if (nums[index] > target && index == end) return -1
            if (nums[index] < target && index == start) return -1
            if (nums[index] > target) end = index;
            if (nums[index] < target) start = index;
        }

        return -1
    }
}
