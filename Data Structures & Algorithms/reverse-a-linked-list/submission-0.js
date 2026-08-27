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
     * @return {ListNode}
     */
    reverseList(head) {
        let newHead = head;
        let queue = [];

        while (newHead != null){
            
            console.log(newHead.val);
            queue.push(newHead.val);
            newHead = newHead.next;
        }

        console.log(queue.reverse())
        newHead = head;
        let i = 0;
        while(newHead != null){
            newHead.val = queue[i];
            i++;
            newHead = newHead.next;
        }
        console.log(newHead);
        return head
    }
}
