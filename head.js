const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💖💖💖 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  if (arr === []) {
    return undefined;
  } else {
    console.log(arr[0]);
    return arr[0];
  }
};

//Test Code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head([5]), 5);