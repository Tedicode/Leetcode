/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  if (!head) return null;

  let current;
  let prev = null;

  let stack = [head];

  while (stack.length) {
    // also to progress up the LL, grab the next current from the stack
    current = stack.pop();

    // attach this new current (we got from the stack) to the LL via the prev
    // note: for first iteration, 'prev' is null so 2nd line here would throw error
    // so only do this if prev is not null

    if (prev) {
      current.prev = prev;
      prev.next = current;
    }

    if (current.next) stack.push(current.next);
    if (current.child) {
      stack.push(current.child);
      current.child = null;
    }

    prev = current;
  }

  return head;
};
