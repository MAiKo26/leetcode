/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k=0;
    
    for(let i = 0; i < nums.length; i++){
        if (nums[i] == val) {nums[i] = -1;k++}
    }
    
    nums.sort((a, b) => (a > b ? -1 : 0));
    return (nums.length - k);
};
