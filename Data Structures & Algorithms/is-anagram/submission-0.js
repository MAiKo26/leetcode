class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        
        let hashTable = {};

        let hashTable2 = {};

        for (let i = 0 ; i < s.length ; i++){
             if (hashTable[s[i]]) {
                hashTable[s[i]] += 1;
            } else {
                hashTable[s[i]] = 1;
            }
        }

        for (let i = 0 ; i < t.length ; i++){
             if (hashTable2[t[i]]) {
                hashTable2[t[i]] += 1;
            } else {
                hashTable2[t[i]] = 1;
            }
        }

        const arr = (Object.keys(hashTable).map((k)=> 
            {
                if (hashTable2[k] !== hashTable[k]) return false;
                
            }
        ))

        return !arr.some(element => element === false);

    }
}
