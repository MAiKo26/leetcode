class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0 ;

        for (let i = 0 ; i < prices.length;i++){
            let arr = prices.slice(0,i).filter((a)=> a < prices[i] );
            console.log(prices.slice(0,i))
            console.log(prices[i])
            if(arr.length > 0){
                if(prices[i]-Math.min(...arr) > max){
                    console.log("changed max to ", prices[i]-Math.min(...arr))
                    max = prices[i]-Math.min(...arr) 
                }
            }            
            console.log("----")
        }

        return max

        
    }
}
