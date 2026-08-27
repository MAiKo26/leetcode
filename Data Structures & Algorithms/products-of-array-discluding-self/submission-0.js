class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = [];

        for (let i = 0 ; i < nums.length ; i++){
            result[i] = 1;
            for (let j = 0 ; j < nums.length ; j++){
                if (i !== j){
                    console.log(nums[j])
                    result[i] = result[i] * nums[j];
                }
            }
        }

        return result

    }
}
