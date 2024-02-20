/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort();
    for (let i = 0; i<nums.length;i++){
        let n = 0 ;
        for (let j = i; j<nums.length;j++){
            if (nums[i] === nums[j]){
                n++;
            }
            if (n > (nums.length/2)) return nums[i];
        }
    }
};
