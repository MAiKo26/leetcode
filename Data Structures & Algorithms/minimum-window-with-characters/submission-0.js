class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
    if (t == "") return ""
    let tHashMap = {}
    let sHashMap = {}
    let need = 0;
    let have = 0;

    for (let i = 0; i < t.length; i++) {
        if (tHashMap[t[i]]) {
            tHashMap[t[i]]++;
        } else {
            tHashMap[t[i]] = 1;
            need++;
        }
    }

    let result = [-1, -1];
    let resultLength = Infinity;
    let l = 0;

    for (let r = 0; r < s.length; r++) { 
        let c = s[r];
        sHashMap[c] = (sHashMap[c] || 0) + 1;

        if (tHashMap[c] && tHashMap[c] == sHashMap[c]) {
            have++;
        }

        while (have == need) {
            if ((r - l + 1) < resultLength) {
                result = [l, r];
                resultLength = r - l + 1;
            }

            sHashMap[s[l]]--;

            if (tHashMap[s[l]] && sHashMap[s[l]] < tHashMap[s[l]]) {
                have--;
            }

            l++;
        }
    } 

    return resultLength == Infinity ? "" : s.slice(result[0], result[1] + 1);  // ← return is here
}
}
