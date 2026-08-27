class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hash = {};

        for (let i = 0 ; i < nums.length ; i++){
            if (!hash[nums[i]]){
                hash[nums[i]] = 1;
            }else{
                hash[nums[i]]++;
            }
        }

        const uniqueKeys = [...new Set(nums)];

        uniqueKeys.sort((a,b)=> hash[b]-hash[a]);

        return uniqueKeys.slice(0,k)

    }


}
