/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  // 2 pointers, starting at both ends
  // move the pointers in, until both reach vowels
  // swap
  // will want to split string into an array, to make swapping easy

  let vowels = "aeiouAEIOU";

  let stringArray = s.split("");

  let first = 0;
  let last = s.length - 1;

  while (first < last) {
    while (!vowels.includes(stringArray[first]) && first < s.length) first++;
    while (!vowels.includes(stringArray[last]) && last >= 0) last--;
    if (first < last) swap(first++, last--, stringArray);
  }

  return stringArray.join("");
};

function swap(i, j, strArr) {
  let temp = strArr[i];
  strArr[i] = strArr[j];
  strArr[j] = temp;
  return strArr;
}
