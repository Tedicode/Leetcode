/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let nodeMap = new Map();
  nodeMap.set(null, null);

  // first pass: create all nodes and build up hash map
  // mapping each old node to new (not yet connected) nodes
  // nodes are not yet connected together, but are mapped from old ones
  let current = head;
  while (current) {
    let copy = new Node(current.val);
    nodeMap.set(current, copy);
    current = current.next;
  }

  // 2nd pass: create the connections amongst copy list
  current = head;
  while (current) {
    let copy = nodeMap.get(current);
    copy.next = nodeMap.get(current.next);
    copy.random = nodeMap.get(current.random);

    current = current.next;
  }

  return nodeMap.get(head);
};
