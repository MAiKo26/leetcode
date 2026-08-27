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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (!list1) return list2
        if (!list2) return list1

        let list3 = new ListNode();
        let list3Tail = list3;


        while (list1 && list2){
                if (list1.val >= list2.val){
                    list3Tail.next = list2;
                    list2 = list2.next;
                }else{
                    list3Tail.next = list1;
                    list1 = list1.next;
                }
                list3Tail = list3Tail.next;
        }

        list3Tail.next = list1 ? list1 : list2;

        console.log(list1);
        console.log(list2);

        return list3.next;
    }
}
