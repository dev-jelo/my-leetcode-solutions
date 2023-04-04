// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let a = [];
    while (head) {
        a.push(head.val);
        head = head.next;
    };

    let l = 0;
    let r = a.length - 1;
    while (l < r) {
        if (a[l] != a[r]) return false;
        l++;
        r--;
    }
    return true;
};