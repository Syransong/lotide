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
};

const without = function (source, itemsToRemove) {
  let newArr = []; 

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArr.push(source[i]); 
    }
  }
  return newArr
}; 

// test code 
console.log(without([1, 2, 3], [1])); // => [2,3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(["1", "2", "3"], [2, 1, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]); 