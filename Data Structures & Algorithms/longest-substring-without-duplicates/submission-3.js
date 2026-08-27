class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let max = 0 ;
        let current = 0;
        let hash = new Map();

        for (let i = 0 ; i < s.length ; i++){
            // console.log(hash)
            // console.log(hash.get(s[i]))
            if (hash.get(s[i])>-1){
            // console.log("Entered seen with current ", current)
                if (current > max) max = current;
                current = 0;
                // console.log(i)
                i = hash.get(s[i])+1
                // console.log("changed i to ", i)
                hash = new Map();
            }

            current++;
            hash.set(s[i],i)


        }

        if (current > max) max = current;

        return max
    }
}
