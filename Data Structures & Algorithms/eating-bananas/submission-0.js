class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let lb = 1;
        let ub = Math.max(...piles);

        while (lb < ub) {
            const mid = Math.floor((lb + ub) / 2);

            let hours = 0;

            for (const pile of piles) {
                hours += Math.ceil(pile / mid);
            }

            if (hours <= h) {
                ub = mid;
            } else {
                lb = mid + 1;
            }
        }

        return lb;
    }
}