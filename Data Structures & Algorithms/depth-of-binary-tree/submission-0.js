/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root,number=0) {
        if (!root) return number;
        number++;

        return Math.max(this.maxDepth(root.left,number),this.maxDepth(root.right,number));


    }
}
