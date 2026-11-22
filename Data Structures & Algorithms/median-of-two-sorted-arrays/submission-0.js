class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let nums3 = [...nums1,...nums2]


        nums3 = nums3.sort((a,b)=> a-b);
        console.log(nums3)

        let result

        if (nums3.length % 2 != 0 ){
            let middle = Math.floor(nums3.length/2) ;
            console.log(middle);
            result = nums3[middle]

        }else{
            
            let floor = Math.floor(nums3.length/2)-1; 
            let ceil = floor + 1 ;

            console.log("Floor is and ceil is : ",ceil,floor)

            result = (nums3[floor] + nums3[ceil])/2

        }



        return result;
    }
}
