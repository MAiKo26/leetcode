class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        console.log("hi")
        let left = 0 ;
        let right = s.length-1;

        function isAlphanumeric(a) {
            return /^[A-Za-z0-9]$/.test(a);
        }

        while(left !== right && left < right){
            if (isAlphanumeric(s[left])){
                if (isAlphanumeric(s[right])){
                    if (s[left].toLowerCase() !== s[right].toLowerCase()){
                        return false;
                    }else{
                        left++;
                        right--;
                    }
                }else{
                    right--;
                }
            }else{
                left++;
            }
        }

        return true;
    }
}
