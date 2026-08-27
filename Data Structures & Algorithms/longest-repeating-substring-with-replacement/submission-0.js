class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        
        let l = 0;
        let r = 0;
        let max = 0;
        let hash = new Map();

        for (r;r<s.length;r++){
            if (!hash.get(s[r])){
                hash.set(s[r],1);
            }else{
                hash.set(s[r],hash.get(s[r])+1)
            }
            while((r-l+1) - Math.max(...hash.values()) > k){
                hash.set(s[l],hash.get(s[l])-1)
                l++
            }
            max = Math.max(max,r-l+1)
        }



        return max
    }
}
