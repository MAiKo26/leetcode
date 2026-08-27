// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) return head;
        let head2 = head;
        let hash = new Map();

        while(head2){
            let newNode = new Node(head2.val);
            hash.set(head2,newNode);
            head2 = head2.next;    
        }

        hash.forEach((copiedNode, originalNode) => {
        if (originalNode.next)   copiedNode.next   = hash.get(originalNode.next);
        if (originalNode.random) copiedNode.random = hash.get(originalNode.random);
        });

        return hash.get(head);
    }
}
