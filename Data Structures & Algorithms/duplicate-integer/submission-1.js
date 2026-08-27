class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const hash = {};

        for (let i = 0 ; i < nums.length ; i++){
            if (hash[nums[i]] !== "seen"){
                  hash[nums[i]] = 'seen';
            }else{
                return true
            }
        }

                    console.log(hash);

        return false;

    }
}
