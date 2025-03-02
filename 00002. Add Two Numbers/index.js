/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    let carry = 0 ;
    let head;
    
    
    if (l1.val + l2.val > 9){
        let rightNumber = (l1.val + l2.val + carry) + "";
        head = new ListNode(rightNumber[rightNumber.length-1]);
        carry++ ;
    }else{
        head = new ListNode(l1.val + l2.val);
    }
    let l3 = head;
    l1 = l1.next;
    l2 = l2.next;
        
    
    while(l1 && l2){

        if (carry > 0){
            if (l1.val + l2.val + carry > 9){
                let rightNumber = (l1.val + l2.val + carry) + "";        
                l3.next = new ListNode(rightNumber[rightNumber.length-1]);
            }else{
                l3.next = new ListNode(l1.val + l2.val + carry);
                carry = 0;
            }
        }else{
            if (l1.val + l2.val > 9){
                let rightNumber = (l1.val + l2.val + carry) + "";
                l3.next = new ListNode(rightNumber[rightNumber.length-1]);
                carry++ ;
            }else{
                l3.next = new ListNode(l1.val + l2.val);
            }
        }
        
        
        l1 = l1.next;
        l2 = l2.next;
        l3 = l3.next;
        
    }
    
    let l4 = l1 || l2;
    

    if (carry > 0){
        while(l4){
            if (l4.val + carry > 9){
                let rightNumber = (l4.val + carry) + "";
                l3.next = new ListNode(rightNumber[rightNumber.length-1]);
            }else{
                l3.next = new ListNode(l4.val+carry);
                carry = 0;
            }
            l3 = l3.next;
            l4 = l4.next ; 
        }
    }else{
        l3.next = l4;
    }
    
    console.log(head);
    console.log(carry);
    
    if (carry > 0) l3.next = new ListNode(carry);
    
    
    
    return head;
};
