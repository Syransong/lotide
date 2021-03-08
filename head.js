const assertEqual = require('./assertEqual');

const head = function(arr) {
  if (arr === []) {
    return undefined;
  } else {
    console.log(arr[0]);
    return arr[0];
  }
};

module.exports = head; 