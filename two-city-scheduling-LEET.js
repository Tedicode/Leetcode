/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  // we can't simply choose the smaller of EACH pair
  // our constraint is we must send half the people to city a
  // and half of them to city b
  // maybe we find the most disparate pairs
  // (pairs with the greatest difference)
  // and prioritize those when first assigning to city a or b
  // b/c we have the most to save there...
  // and then give the remainder to the city with fewer people

  // like sorting the arrays by their difference

  let sortedCostsArr = costs.sort(
    (a, b) => Math.abs(a[1] - a[0]) - Math.abs(b[1] - b[0])
  );

  // then iterate thru array
  // for each pair (person), assign them to the city that is cheaper (a or b)
  // monitor while traversing this array :
  // if and when one city fills up (reaches a length of n),
  // meaning we can no longer opt for the "optimal" choice
  // THEN go ahead and give the rest of the pairs to the other (not filled up yet) city

  let n = costs.length / 2;
  let arrayCityA = [];
  let arrayCityB = [];
  let remainderGoesTo = null;

  while (sortedCostsArr.length) {
    if (arrayCityA.length === n || arrayCityB.length === n) {
      remainderGoesTo = arrayCityA.length === n ? "B" : "A";
      break;
    }
    let [cityA, cityB] = sortedCostsArr.pop();
    let choice = cityA > cityB ? cityB : cityA;
    let arr =
      choice === cityA && arrayCityA.length < n ? arrayCityA : arrayCityB;
    arr.push(choice);
  }

  if (remainderGoesTo && remainderGoesTo === "A") {
    while (sortedCostsArr.length) arrayCityA.push(sortedCostsArr.pop()[0]);
  } else if (remainderGoesTo && remainderGoesTo === "B") {
    while (sortedCostsArr.length) {
      arrayCityB.push(sortedCostsArr.pop()[1]);
    }
  }

  let sum = 0;

  for (let cost of arrayCityA) sum += Number(cost);
  for (let cost of arrayCityB) sum += Number(cost);

  return sum;
};
