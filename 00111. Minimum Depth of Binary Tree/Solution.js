/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) return 0;
    
    return Math.min(minDepthSearch(root.left),minDepthSearch(root.right));
};


function minDepthSearch(root) {
    if (!root) return 0;
    return Math.min(minDepthSearch(root.left)+1,minDepthSearch(root.right)+1);
};
