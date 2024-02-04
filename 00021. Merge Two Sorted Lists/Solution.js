/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
    if(!list1) return list2;
    if(!list2) return list1;
    
    var listHead;

    if (list1.val > list2.val){
        listHead = list2;
        list2 = list2.next;
    }else{
        listHead = list1;
        list1 = list1.next;
    }

    var listTail = listHead;
    
    while(list1 && list2){
        if (list1.val > list2.val){
            listTail.next = list2;
            list2 = list2.next;
            listTail = listTail.next;
        }else{
            listTail.next = list1;
            list1 = list1.next;
            listTail = listTail.next;
        }
    }
    
    if (list1){
        listTail.next = list1;
        listTail = listTail.next;
    }
    
    if (list2){
        listTail.next = list2;
        listTail = listTail.next;
    }    
    
    return listHead;
    
};
