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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // reverse
        
    function reverseList(head) {
        let curr = head;
        let prev = null;

        while (curr != null){
            let newNext = curr.next;
            curr.next = prev;
            prev = curr ;
            curr = newNext;

        }

        return prev
    }

    head = reverseList(head);


        // removing the nth
        let holder = head;
        if (!holder.next && n == 1) return null;
        if (n == 1) head = holder.next;
        let counter = 1;
        while(holder && counter + 1 < n){
            console.log("up")
            counter++;
            holder = holder.next;   
        }

        if (holder.next){
            holder.next =  holder.next.next ;
        }else{
            holder.next = null;
        }

        console.log(holder.val)

        head = reverseList(head)

        return head

    }
}
