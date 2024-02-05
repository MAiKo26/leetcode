/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? "0" : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    
    let s = new Set();
    while(head){
        s.add(head.val);
        head = head.next;
    }
    
    head = new ListNode();
    let tail = head;
    
    s.forEach((val) => {
        tail.next = new ListNode(val);
        tail = tail.next;
    });
    
    
    return head.next;

};
