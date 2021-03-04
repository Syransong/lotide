const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i ++) {
      if (arr1[i] !== arr2[i]) {
        return false
      }
    }
  }
  return true; 
}
const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)){
    console.log((`💖 Assertion Passed: ${arr1} === ${arr2}`));
  } else {
    console.log(`💀 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

// take 2 parameters 1) one array to work with 2) the callback 
// the function will return a slice of an array with elements taken from the beginning 

const takeUntil = function(array, callback) {
  const slice = []; 

  for (const element of array) {
    if (!callback(element)) {
      slice.push(element);
    } else {
      return slice; 
    }
  }
  return slice; 
}; 

// Test Code

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1); // prints [1, 2, 5, 7, 2]
console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2]));

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2); // prints ['I\ve, 'been', 'to', 'Hollywood']
console.log(assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]));