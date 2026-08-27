class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        if (strs.length < 2) return [strs]

        function isAnagram(a,b){
            return a.split("").sort().join("") === b.split("").sort().join("")
        }

        let result = [];

        let hash = {};

        for (let i = 0 ; i < strs.length ; i++){
            let curr = []
            curr.push(strs[i])
            for (let j = i ; j < strs.length ; j++){
                if (isAnagram(strs[i],strs[j]) && i !== j && hash[j] !== "seen"){
                    curr.push(strs[j])
                    hash[j] = "seen"
                }
            }
            if (hash[i] !== "seen")
            result.push(curr)
        }
 
        return result ;

    }

}
