class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {

        if(!this.keyStore.has(key)){
            this.keyStore.set(key,[])
        }
        let currentArray = this.keyStore.get(key);
        currentArray.push([value,timestamp])
        this.keyStore.set(key,currentArray)
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {

        let result = ""

        let values = this.keyStore.get(key) || []

        let left = 0
        let right = values.length -1

        while (left <= right){
            let middle = Math.floor((left + right) / 2)
            
            if (values[middle][1] <= timestamp){
                result = values[middle][0]
                left = middle +1
            }else{
                right = middle - 1
            }
        
        } 

        return result
    }
}
