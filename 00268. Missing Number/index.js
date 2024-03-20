/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums = nums.sort((a,b)=>a-b);
    numsLength = nums.length;
    for (let i = 0 ; i < numsLength ; i++ ){
        if (nums[i] !== i) return i;
    }
    return numsLength;
    
};
