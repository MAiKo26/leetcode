/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    return (nums.findIndex((element) => element >= target) == -1) ? nums.length :  nums.findIndex((element) => element >= target)
};
