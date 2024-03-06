/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    
    
    let i = 0;
    let array = [];
    let startRange = null ;
    let endRange ;
    
    while(nums.length-i > 0){
        
        if(startRange === null){
            startRange = nums[i];
            console.log("here "+nums[i])
        }
        
        if ( ((nums[i+1]-nums[i]) > 1) ){
            endRange = nums[i];
            console.log("entered with " + startRange + " " + endRange);
            
            if (Number(startRange) === Number(endRange)){
                array.push(""+startRange);
            }else{
                array.push(startRange+"->"+endRange);
            }
            
            startRange = null ;
        }
        
        if (nums[i+1] === undefined){
            if (startRange === null){
                array.push(""+nums[i]);
            }else{
                if (Number(startRange) === nums[i]){
                    array.push(""+startRange);
                }else{
                    array.push(startRange+"->"+nums[i]);
            }
            }
            
        }
        
        i++;
        
    }

    
    return array;
};
