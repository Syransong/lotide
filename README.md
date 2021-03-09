# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @syransong/lotide`

**Require it:**

`const _ = require('@syransong/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArrayEqual`: A function that asserts if two arrays are equal to each other
* `assertEqual`: A function that asserts if two values are equal to each other
* `assertObjectsEqual`: A function that asserts if two Objects are equal to each other 
* `countLetters`: A function that that counts the number of letters in a string 
* `countOnly`: A function that takes in a collection of items and returns the counts for a certain subset of said items 
* `eqArrays`: A function that determines if two arrays are identical to each other 
* `eqObjects`: A function that determines if two objects are identical to each other 
* `findKey`: A function that goes through an object and returns the first key for which the callback returns a 'truthy' value 
* `findKeybyValue`: A function that goes through an object and searches for the key where its value matches a given value
* `head`: A function that returns the value of the zeroth index in an array 
* `letterPositions`: A function that returns all the indices where a certain letter occurs in a string 
* `map`: A function that returns a new array based on the results of the callback function provided
* `middle`: A function that returns the middle (if array length is odd) element or the 2 middlemost elements (if array length is even)
* `tail`: A function that returns the last element in an array 
* `takeUntil`: A function that will return a slice of an array with elements taken from the beginning until a certain value is reached 
* `without`: A function that removes certain elements in an array