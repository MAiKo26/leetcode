/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let array = [];
    for (let i = 0 ; i < n+1 ; i++){
        array.push(i.toString(2));
    }
    for (let i = 0 ; i < array.length; i++){
        let sum = 0 ;
        array[i] = array[i].split("").reduce((partialSum, a) => Number(partialSum) + Number(a), 0);
    }
    return array;
};
