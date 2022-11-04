/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function (transactions) {
  let resultsArr = [];

  // in first pass, populate a hashmap to hold each PERSON's transactions
  // since one trigger is same name

  // in second pass, check for flags:
  // 1. check for other transactions under same name (hashmap lookup by name gives array of trans').
  // FLAG IF: any other trans exists w/in same 60 mins in another city
  // FLAG IF: amount > 1000

  let hashMap = {};
  for (let transaction of transactions) {
    let [name, time, amount, loc] = transaction.split(",");

    if (!hashMap[name]) hashMap[name] = [];
    hashMap[name].push({ time, amount, loc });
  }

  console.log(hashMap["alice"]);
  for (let transaction of transactions) {
    let [name, time, amount, loc] = transaction.split(",");
    // flag if any other transactions found in this name within 60 mins in a DIFF CITY
    if (
      hashMap[name].filter(
        (trans) => Math.abs(trans.time - time) <= 60 && trans.loc !== loc
      ).length > 0
    )
      resultsArr.push(transaction);
    else if (amount > 1000) resultsArr.push(transaction);
  }

  return resultsArr;
};
