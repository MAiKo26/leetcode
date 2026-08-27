class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxWater = 0;
        let n = height.length;
        let left = 0;

        while (left < n) {
            
            let right = left + 1;
            while (right < n && height[right] < height[left]) {
                right++;
            }

            
            if (right == n) {
                right = left + 1;
                let maxRightHeight = 0;
                let maxRightIndex = left + 1;
                while (right < n) {
                    if (height[right] > maxRightHeight) {
                        maxRightHeight = height[right];
                        maxRightIndex = right;
                    }
                    right++;
                }
                right = maxRightIndex;
            }

            
            let waterLevel = Math.min(height[left], height[right]);
            let containerWater = 0;
            for (let i = left + 1; i < right; i++) {
                containerWater += waterLevel - height[i];
            }

            maxWater += containerWater;
            left = right; 
        }

        return maxWater;
    }
}
