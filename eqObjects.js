const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💖💖💖 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
  }
};
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

/*function below is for PRIMITIVE VALUES 

const eqObjects = function(object1, object2) {
  const obj1Arr = Object.keys(object1);
  const obj2Arr = Object.keys(object2); 
  
  if (obj1Arr.length !== obj2Arr.length) { // check if both objects have the same length (aka # of keys)
    return false;
  } else {
    for (const keyName of obj1Arr) {
      if (object1[keyName] !== object2[keyName]) {
        return false; 
      }
    }
    return true;
  }
}; */ 

// Compare two objects 
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
// Test Code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);