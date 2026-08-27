class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const state = []
        for (let i = 0 ; i < strs.length ; i++){
            state.push(strs[i].length);
        }



        if (state.length === 0) state.push(-1)



        return String(state+"#") + strs.join("");
        
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const firstHash = str.indexOf("#")
        const state = str.slice(0,firstHash).split(",");

        if (state.length === 1 && state[0] == -1) return []
        str = str.slice(firstHash+1);

        const result = [];
        for (let i = 0 ; i < state.length ; i++){
            result.push(str.slice(0,state[i]));
            str = str.slice(state[i])
        }
        return result
    }
}
