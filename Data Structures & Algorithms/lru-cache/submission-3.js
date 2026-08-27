class LRUCache {
    
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.hash = new Map();
        this.capacity = capacity;
        this.LRUList = [];
    }


    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.LRUList.find(item => item === key)) return -1 ;

        this.LRUList = [...this.LRUList.filter(x => x !== key), key];

        let val = this.hash.get(key);
        
        return val
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this.LRUList = [...this.LRUList.filter(x => x !== key), key];

        this.hash.set(key,value)
        
    
        if (this.LRUList.length > this.capacity) this.LRUList = this.LRUList.slice(1,this.LRUList.length)
    }
}
