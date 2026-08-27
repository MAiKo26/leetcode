class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let target = s1.split("").sort().join("");


    for (let l = 0; l <= s2.length - s1.length; l++) {
        let arr = s2.slice(l, l + s1.length).split("").sort().join("");
        if (arr === target) return true;
    }

    return false;

    }
}
