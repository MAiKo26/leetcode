/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length === 0) {
        return null;
    }
    
    return buildTree(nums, 0, nums.length - 1);
};

function buildTree(nums, start, end) {
    if (start > end) return null; 

    let mid = Math.floor((start + end) / 2); 
    
    let root = new TreeNode(nums[mid]);
    
    root.left = buildTree(nums, start, mid - 1);
    root.right = buildTree(nums, mid + 1, end);
    
    return root;
}
