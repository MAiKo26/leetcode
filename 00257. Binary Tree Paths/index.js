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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {

    let result = [];
    binaryTreePathsSearch(root, "",result);
    
    return result;
};


function binaryTreePathsSearch(root, currentPath,result) {
        if (root === null) {
            return;
        }
        if (root.left === null && root.right === null) {
            currentPath += root.val;
            result.push(currentPath);
            return;
        }
        binaryTreePathsSearch(root.left, currentPath + root.val + "->",result);
        binaryTreePathsSearch(root.right, currentPath + root.val + "->",result);
    }
