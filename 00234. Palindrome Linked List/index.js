/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
    let s = [];
    
    while(head){
        s.push(head.val);
        head = head.next;
    }
    
    return s.join() === s.reverse().join() ;
    
};

