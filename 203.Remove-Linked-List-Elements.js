// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let result = new ListNode(0, null);
    let current = result;
    while (head) {
        if (head.val != val) {
            current.next = head;
            current = current.next;          
        }
        head = head.next;
    }
    current.next = null;
    return result.next;
};