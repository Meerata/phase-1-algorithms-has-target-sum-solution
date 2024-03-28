function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2) - Quadratic time complexity due to nested loops
*/

/* 
  Add your pseudocode here
  - Iterate over the array
  - For each number, find its complement to reach the target
  - Check if the complement exists in the array
  - If found, return true
  - If loop completes without finding a pair, return false
*/

/*
  Add written explanation of your solution here
  This function iterates over the array and for each element, it computes its complement to reach the target. It then searches for this complement in the array. If found, it returns true indicating that a pair exists. If no such pair is found after iterating through the array, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
