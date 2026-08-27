class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let fleet = position.length;
        let computedArray = [] 
        
        for(let i = 0; i < position.length;i++){
            computedArray.push({position:position[i],speed:speed[i],time:(target-position[i])/speed[i]}) 
        }

        computedArray.sort((a,b)=> a.position - b.position);

        for (let i = computedArray.length-1 ; i > 0 ; i--){
            console.log(computedArray[i])
            console.log(computedArray[i-1])

            if (computedArray[i].time >= computedArray[i-1].time){
                fleet--;
                computedArray[i-1].time = computedArray[i].time;
            }
        }

        return fleet
    }
}
