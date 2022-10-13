/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // find the longer of the first two
  // then use that with the next (find the longer of that result and the next word)
  // and so on

  // create helper function that takes in 2 words and returns the longest common prefix

  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];

  function helperRecurse(result, stringsArray, i) {
    if (i + 1 === stringsArray.length) return result;
    let nextWord = stringsArray[i + 1];
    let common = longerOfTwo(result, nextWord);
    return helperRecurse(common, stringsArray, i + 1);
  }

  let firstWord = strs[0];
  let secondWord = strs[1];
  let firstResult = longerOfTwo(firstWord, secondWord);

  return helperRecurse(firstResult, strs, 1);
};

function longerOfTwo(word1, word2) {
  let prefix = "";
  let idx = 0;

  let length = word1.length > word2.length ? word2.length : word1.length;

  while (word1[idx] === word2[idx] && idx < length) {
    prefix += word1[idx];
    idx++;
  }

  return prefix;
}
