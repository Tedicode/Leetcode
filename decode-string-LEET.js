/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  // iterate thru s
  // 'char' means add to/keep building substring
  // a number means add to/keep building up a multiplier
  // '[' means entering a new string scope. So commit multiplier to its stack, and reset it,
  // AND commit subString to other stack, and reset that too.
  // ']' means wrapping up a string scope. So retrieve its multiplier from the stack
  // and use it to multiply the enclosed subString, and append that to the most recently
  // stored subString in that stack (pop off the top of strings stack). Make this the
  // most up to date subString
  // (this growing string expands outward if our encoded input string has NESTing)

  let charStack = [];
  let repeatNumStack = [];
  let num = "";
  let subString = "";

  for (let char of s) {
    if (char === "[") {
      repeatNumStack.push(num);
      num = "";

      charStack.push(subString);
      subString = "";
    } else if (char === "]") {
      // commit the charStr to that stack
      // charStack.push(subString)
      // subString = ''

      subString =
        charStack.pop() + subString.repeat(Number(repeatNumStack.pop()));
    } else if (!isNaN(char)) {
      num += char;
    } else {
      // its a string char
      subString += char;
    }
  }

  return subString;
};
