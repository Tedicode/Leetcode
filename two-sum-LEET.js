/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hashMap = {};
  console.log("input array: ", nums);

  for (let num of nums) {
    let complement = target - num;
    if (hashMap[complement]) {
      let firstIdx = nums.indexOf(complement);
      // now that you have the first index, overwrite it in the array
      // so that in the event of duplicates, the .indexOf() method doesn't use same index twice
      nums[firstIdx] = "overwrite";
      let secondIdx = nums.indexOf(num);
      return [firstIdx, secondIdx];
    } else hashMap[num] = true;
  }
};
