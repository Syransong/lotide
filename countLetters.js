const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💖💖💖 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (str) {
  let result = {}; 

  for (let letter of str) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1; 
      }
    }
  }
  return result; 
};

console.log(countLetters('LHL')); // return something like L: 2, H:2
console.log(countLetters("lighthouse in the house"));