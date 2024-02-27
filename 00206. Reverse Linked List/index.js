/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {

    let array = [];

    
    while (head){
        array.unshift(head.val);
        head = head.next;
    }
    head = null;
    
    if (array.length > 0) head = new ListNode(array.shift(),null);
    
    let list = head;


    while(array.length > 0){
        list.next = new ListNode(array.shift(),null);
        list = list.next;
    }
    
    return head;
    
};
