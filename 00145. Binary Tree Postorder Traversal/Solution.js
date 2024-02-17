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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let List = [];
    recursiveTraversal(root,List);
    
    return List;
    
};

function recursiveTraversal(root,List){
    if (!root) return
    
    recursiveTraversal(root.left,List);
    recursiveTraversal(root.right,List);
    List.push(root.val);
}
