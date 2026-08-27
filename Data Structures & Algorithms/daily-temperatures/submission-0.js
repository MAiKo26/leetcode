class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = []

        for (let i = 0 ; i < temperatures.length ; i++){
            let nextHighest = 0;
            for (let j = i ; j < temperatures.length ; j++){
                if (temperatures[i] < temperatures[j]){
                    nextHighest = j - i;
                    break;
                }
            }
            result.push(nextHighest)
        }

        return result
    }
}
