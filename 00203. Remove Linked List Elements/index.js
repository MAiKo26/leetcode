/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let tail = head;
    try{
    while(tail.next){
        if (tail?.next?.val === val){
            tail.next = tail?.next?.next ;
        }else{
            tail = tail.next;
        }
    }
    }finally{
        if (head && head.val === val){
            let test = head.next;
            if (test) head = test; else head = null; 
        }
        return head;
    }
    
};
