const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💖💖💖 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (obj, key) {
  const keysArr = Object.keys(obj)
  
  for (let element of keysArr) {
    if (obj[element] === key) {
      return element; 
    }
  }
};

//Test code: 
const bestTVShowsByGenre = {
  sci_fi: "The Expance", 
  comedy: "Brookly Nine-Nine",
  drama: "The Wire"
}
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);