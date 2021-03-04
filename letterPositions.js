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

const letterPositions = function(sentence) {
  const results = {}; 
  
  for (let i=0; i < sentence.length; i++) { //loop through the string
    if (sentence[i] !== " ") { //skip over spaces 
      if (results[sentence[i]]) { //if the object contains the key
        results[sentence[i]].push(i).join; //if the object contains that key, then add the index to the array
      } else {
        results[sentence[i]] = [i]; //if the object doesnt contain that key, then add the key and index
      }
    }
  }
  return results; 
}
// Test Code
console.log(assertArraysEqual(letterPositions("hello").e, [1])); 
