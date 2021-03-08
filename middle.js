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

module.exports = middle; 