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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true;
    return recursiveTraversal(root.left, root.right);
};

function recursiveTraversal(left,right){
    
    if (!left && !right) return true;
    if (!left || !right) return false;
    return (left.val == right.val) && recursiveTraversal(left.left, right.right) && recursiveTraversal(left.right, right.left);
}
