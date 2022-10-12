/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  // use pointers to swap (like an anagram)
  // do this for each row

  for (let i = 0; i < image.length; i++) {
    // for each iteration ( for each row )
    // have pointers and reverse the entire array
    let arr = image[i];

    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[0].length; j++) {
      if (image[i][j] === 0) image[i][j] = 1;
      else image[i][j] = 0;
    }
  }

  return image;
};
