const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💖💖💖 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Make a function "findKey" that takes an object and a callback 
// This will scan the object and return the first key for which the callback returns a truthy value 
// If no key is found, return undefined 

const findKey = function (obj, callback) {
  
  for (let key in obj) {
    if (callback(obj[key]) === true) {
      return key; 
    } 
  }
};

//Test Code
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma') // => "noma"

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 4), undefined) // => "undefined"





