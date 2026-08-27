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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let arr = [];
        for (let i = 0 ; i < lists.length; i++ ){
            let N = lists[i];

            while(N){
                arr.push(N.val);
                N = N.next
            } 
        }

        if (!arr.length) return null

        arr = arr.sort((a,b)=> a-b);

        let head = new ListNode(arr[0]);

        arr = arr.slice(1,arr.length)

        let tail = head;

        for (let i = 0 ; i < arr.length ; i++){
            let node = new ListNode(arr[i]);
            tail.next = node;
            tail = node;

        }

        return head
    }
}
