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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!root && !subRoot) return true;
        if (!root) return false;
        if (!subRoot) return false;
        console.log(root.val);
        console.log(subRoot.val);
        console.log("=============")

        if (root.val == subRoot.val && (root.right?.val == subRoot.right?.val && root.left?.val == subRoot.left?.val)){
            // if (!subRoot.left && !subRoot.right) return true
            return (this.isSubtree(root.left,subRoot.left) && this.isSubtree(root.right,subRoot.right))
        }else{
            return this.isSubtree(root.left,subRoot) || this.isSubtree(root.right,subRoot)
        }

    }
}
