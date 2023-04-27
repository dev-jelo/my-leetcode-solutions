// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (headA === headB) return headA;
    let arrA = [];
    let arrB = [];
    while (headA) {
        arrA.push(headA);
        headA = headA.next;
    }
    while (headB) {
        arrB.push(headB);
        headB = headB.next;
    }

    let i = arrA.length - 1;
    let j = arrB.length - 1;
    if (arrA[i] === arrB[j]) {
        while (i || j) {
            if (arrA[i] !== arrB[j]) {
                return arrA[i + 1];
            }
            i--;
            j--;
        }
    } else {
        return null;
    }
};