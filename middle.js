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

const middle = function(arr) {
  let newArr = []; 

  if (arr.length <= 2) {
    //return empty array 
    return newArr; 
  } else if (arr.length % 2 === 1) {
    //return middle element
    newArr.push(arr[Math.round((arr.length -1) / 2)]); 
  } else if (arr.length % 2 === 0) {
    //return the 2 middlemost elements 
    newArr.push(arr[(arr.length/2) -1]);
    newArr.push(arr[arr.length/2]);
  }
  return newArr; 
}

//test code
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2,3])); // => assertion passed! 