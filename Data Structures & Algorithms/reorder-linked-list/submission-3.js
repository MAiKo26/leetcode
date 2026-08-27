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
     * @return {void}
     */
    reorderList(head) {
        let fast = head;
        let slow = head;
        let prev = null;

    function reverseList(head) {
        if (!head || !head.next) return;
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

        // splitting
        while (fast && fast.next) {
            fast = fast.next.next;
            prev = slow;
            slow = slow.next;
            
        }   
        console.log(prev)
        if (prev){
        prev.next = null;
        }

        console.log(slow)
        console.log(head)

        // reversing
        slow = reverseList(slow)

        // merging
        let first = head;
        let second = slow;

        while (first && second) {
            let tmp1 = first.next;
            let tmp2 = second.next;

            first.next = second;

            if (tmp1 === null) {
                break;
            }
            
            second.next = tmp1;

            first = tmp1;
            second = tmp2;
        }


        return head
        
    }
}
