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
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {

        let dummy = new ListNode(0,head);
        let groupPrev = dummy;

        while(1){
            let kth = getKth(groupPrev,k)
            if (!kth) break;

            let groupNext = kth.next;

            // reversing

            let prev = kth.next;
            let curr = groupPrev.next;

            while(curr!=groupNext){
                let tmp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = tmp
            }

            let tmp = groupPrev.next
            groupPrev.next = kth;
            groupPrev = tmp


        }
        
        function getKth(curr,k){
            while(curr && k >0){
                curr = curr.next;
                k = k-1;
            }
            return curr
        }

        return dummy.next
    }
}
