/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let results = [];

  for (let num of nums) {
    if (num % 2 === 0) results.push(num);
  }

  for (let num of nums) {
    if (num % 2 !== 0) results.push(num);
  }

  return results;
};
