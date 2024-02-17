/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let tailB = headB;
    
    while(headA){
        if (!tailB){ headA = headA.next;  tailB = headB; }
        if (!headA || !headB) return null;
        if (headA === tailB) return headA;
        tailB = tailB.next;
        
    }
};
