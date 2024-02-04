/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var k = nums.length ;
    for (var i = 0 ; i < nums.length ; i++){
        if (nums[i] == nums[i+1] && nums[i+1] != null){
            for (var j = i ; j < nums.length ; j++){
                nums[j]= nums[j+1] ;
                
            }
           k-- ;
           i--;
        }
    }
    return k ;
};
