class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let hash = {}
        let result ;
        nums.forEach((a)=>{
            if (hash[a] == "seen") result = a
            console.log(hash)
            hash[a] = "seen"
        })

        return result;
    }
}
