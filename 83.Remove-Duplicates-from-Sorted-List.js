// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let list = head;
    while (list != null) {
        let num = list.val;
        while(list.next != null && list.next.val == num) {
            list.next = list.next.next;
        };
        list = list.next;
    };

    return head;
};