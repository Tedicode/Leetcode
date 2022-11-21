/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  // implement with a stack

  let stack = [];

  for (let c of s) {
    if (stack.length) {
      let current = stack.pop();
      if (current[0] === c) {
        current[1]++;
        // only put it back on the stack if its count is NOT yet K
        // if its equal to k, leave it off the stack
        if (current[1] < k) stack.push(current);
      } else {
        stack.push(current);
        stack.push([c, 1]);
      }
    } else stack.push([c, 1]);
  }

  // after removal of all k-dup streaks, rebuild the string from the stack
  // to return

  let resultString = "";
  if (!stack.length) return "";
  // stack.pop()
  for (let pair of stack) {
    console.log(pair);
    let [char, count] = pair;
    for (let i = 0; i < count; i++) {
      resultString += char;
    }
  }

  return resultString;
};
