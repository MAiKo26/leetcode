/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var i = 0;
    var j = 0 ;
    var x = false ;
    var nums2 = [] ;
    
    while (x=== false){
        if (i > nums.length )
            x = true;
        if (j > nums.length)
           { i++; j= 0 ; }
        if ((nums[i] + nums[j] == target) && j != i)
           { nums2[0] = i;
            nums2[1] = j ;
            x = true ;
    }
        j++ ;
        }
        return nums2 ;
};
