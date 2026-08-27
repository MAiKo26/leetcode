/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {

        let l1R = "";
        let l2R = "";

        while(l1){
            l1R =  l1.val + l1R ;
            l1 = l1.next;
        }

        while(l2){
            l2R = l2.val + l2R;
            l2 = l2.next;
        }

        console.log(l1R)
        console.log(l2R)

        let l3RN = Number(l1R) + Number(l2R);

        let l3R = l3RN.toString().split("").reverse().join("");

        console.log(l3R)
        let l3 = new ListNode(l3R.slice(0,1));
        console.log(l3)
        l3R = l3R.slice(1,l3R.length);
        console.log(l3R);
        let tail = l3;
        while(l3R.length > 0){
            let n = new ListNode(l3R.slice(0,1));
            l3R = l3R.slice(1,l3R.length);
            tail.next = n;
            tail = n;
        }

        return l3;
    }
}
