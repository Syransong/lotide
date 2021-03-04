// Compare arrays function
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
};

// Checks if two objects have identical keys with identical values 
const eqObjects = function(object1, object2) {
  const obj1Arr = Object.keys(object1);
  const obj2Arr = Object.keys(object2);

  if (obj1Arr.length !== obj2Arr.length) {
    return false; 
  } else {
    for (let keyName of obj1Arr) {
      if (Array.isArray(object1[keyName]) && Array.isArray(object2[keyName])) {
        return (eqArrays(object1[keyName], object2[keyName]));
      } else if (object1[keyName] !== object2[keyName]) {
        return false
    }
  }
    return true; 
  }
}; 

// takes two objects and console logs the appropriate message 
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 

  if (eqObjects(actual, expected)) {
    console.log(`💖 Assertation Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`💀 Assertation Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}; 

//Test Code
console.log(assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" }));
console.log(assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "2" }));
console.log(assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "2", c: "7" }));