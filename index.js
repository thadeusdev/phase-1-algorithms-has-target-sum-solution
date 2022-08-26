function hasTargetSum(array, target) {
  const seenNumbers = new Set(); // initialize an empty Set
  for (const number of array) {
    const complement = target - number;

    // .has returns true if the Set includes the complement
    if (seenNumbers.has(complement)) return true;

    // .add adds the number to the Set
    seenNumbers.add(number);
  }
  return false;
}

//By using an object instead of an array to store data, we can improve the runtime of searching through data from O(n) to O(1)
// O(n) runtime
function findSock(array) {
  for (const item of array) {
    if (item === "sock") return "sock";
  }
}

// O(1) runtime
function findSock(object) {
  if (object.sock) return "sock";
}

/* 
  Write the Big O time complexity of your function here
  Runtime: 0(n^2)
  Space complexity: 0(n)
*/

/* 
  Add your pseudocode here
create an object to keep track of all the numbers we've seen
iterate over the array of numbers
  for the current number, identify a complementary number that adds to our target
  (for example: if our number is 2, and the target is 5, the complementary number is 3)
  check if any of the keys in our object is the complement to the current number
    if so, return true
  save the current number as the key on our object so we can check it later against other numbers
if we reach the end of the array, return false
*/

/*
  Add written explanation of your solution here
  // make a function `hastargetSum` that checks if two numbers from tha array add up to some target. e.g if i have an array `[1,2,3,4]` and the target is `6` i should return true because 2 and 4 add to 6.
  // for each number check if there's a number that adds to the target.
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
