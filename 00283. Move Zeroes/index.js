/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let j = 0;
    for (let i =0; i < nums.length+j ; i++){
        let a = nums.shift();
        if (a === 0){
            j++;
        }else{
            nums.push(a);
        }
    }
    for (let i = 0 ; i < j; i++){
        nums.push(0);
    }
};
