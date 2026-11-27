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
     * @return {boolean}
     */
    isBalanced(root) {
        function dfs(curr) {
            if (!curr) return 0;

            const leftHeight = dfs(curr.left);
            if (leftHeight === -1) return -1; // Left subtree is unbalanced

            const rightHeight = dfs(curr.right);
            if (rightHeight === -1) return -1; // Right subtree is unbalanced

            // Check if the current node is balanced
            if (Math.abs(leftHeight - rightHeight) > 1) {
                return -1;
            }

            // Return the actual height of this subtree
            return 1 + Math.max(leftHeight, rightHeight);
        }

        return dfs(root) !== -1;
    }
}
