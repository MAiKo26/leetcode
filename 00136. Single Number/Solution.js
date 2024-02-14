/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort();    
    while (nums.length > 0){
        start = nums.shift();
        compareValue = nums.shift();
        if (start != compareValue){
            return start;
        }
    }
};
