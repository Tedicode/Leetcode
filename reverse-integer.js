/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let neg = false;

  let strX = x + "";
  if (strX[0] === "-") {
    strX = strX.slice(1);
    neg = true;
  }
  let reversedStr = "";
  for (let i = strX.length - 1; i >= 0; i--) {
    reversedStr += strX[i];
  }

  let result = Number(reversedStr);
  if (result > 2 ** 31) return 0;
  return neg ? -1 * result : result;
};
