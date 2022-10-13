/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  // pair large with large, and small with small

  nums.sort((a, b) => a - b);
  let sum = 0;

  let first = 0;
  let last = 1;

  while (last < nums.length) {
    sum += Math.min(nums[first], nums[last]);
    first += 2;
    last += 2;
  }

  return sum;
};
