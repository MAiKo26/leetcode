class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        let left = 0
        let right = nums.length -1

        while (left < right){
            let middle = Math.floor((left+right) /2)
            console.log("hello")
            console.log(middle,left,right)
            if (nums[middle] === target) return middle


            if (nums[left] <= nums[middle]) {
                if (nums[left] <= target && target < nums[middle]) {
                    right = middle - 1
                } else {
                    left = middle + 1
                }
            }
            else {
                if (nums[middle] < target && target <= nums[right]) {
                    left = middle + 1
                } else {
                    right = middle - 1
                }
            }

        }

        return nums[left] === target ? left : -1
    }
}
