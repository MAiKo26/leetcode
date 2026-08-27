class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numset = new Set(nums);
        nums = [...numset];
        let longestN = 0 ;
        const sequences = [];
        nums = nums.sort((a,b)=> a-b);
        for (let i = 0 ; i < nums.length ; i++){

            if (!numset.has(nums[i]-1)){
                // start of sequence
                sequences.push([i,i]);
            }
            if (!numset.has(nums[i]+1)){
                sequences[sequences.length-1][1] = i;
            }


        }

        for (let i = 0 ; i < sequences.length ; i++){

            if (sequences[i][1]-sequences[i][0]+1 > longestN){
                longestN = sequences[i][1]-sequences[i][0]+1 ;
            }
        }

        return longestN
    }
}
