/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    s = s.split("") ;
    let i = 0;
    let j = s.length-1;
    while (i < j){
        let imatch = s[i].match(/[aeiou]/gi);
        let jmatch = s[j].match(/[aeiou]/gi)
        if (!imatch) i++;
        if (!jmatch) j--;
        
        if (imatch && jmatch){
            let hold = s[i];
            s[i] = s[j];
            s[j] = hold ;
            i++;
            j--;
        }
        
    }
    
    return s.join("") ;
};

var vowels = ['a', 'e', 'i', 'o','u'];