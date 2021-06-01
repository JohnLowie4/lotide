# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: Takes 2 arrays as arguments and prints a message unto the terminal/command prompt if both arrays at the same idices have the same elements
* `assertEqual(actual, expeted)`: Takes 2 arguments and compares the first argument to the second and prints the result onto the terminal/command prompt
* `assertObjectsEqual(actual, expected)`: Takes 2 objects as arguments and compares both objects
* `countLetters(str)`: Takes a string as an argument and counts how many times each letter appears in the string and is stored and returned as an object
* `countOnly(allItems, itemsToCount)`: Takes 2 arguments, one is an array of names, the second argument is an object to determine which names to count. Returns an object that counts the number of times the name appeared in the array
* `eqArrays(arg1, arg2)`: Takes 2 arrays as arguments and compares the arrays and returns a boolean
* `eqObjects(object1, object2)`: Takes 2 objects as arguments and compares if both objects are the same and returns a boolean
* `findKey(obj, callback)`: Takes an object and a callback function as argument and implements callback function on the keys of the object
* `findKeyByValue(obj, value)`: Takes an object and a value as arguments and returns the key that has the value
* `flatten(arr)`: Takes an array as an argument and takes all the nested arrays and returns one large array
* `head(arr)`: Takes an array as an argument and returns the first element of the array
* `index`: Object shorthand
* `letterPositions(sentence)`: Takes a string as an argument and returns an object properties representing the indices of where each letter of the string appears as an array
* `map(array, callback)`: Takes an array and a function as arguments and returns an array of the results of the function applied to each element of the array
* `middle(arr)`: Takes an array as an argument and returns the middle element(s)
* `tail(arr)`: Takes an array as an argument and returns an array with the first element removed
* `takeUntil(array, callback)`: Takes an array and a callback function as arguments and returns a sub array when the function applied to the elements of the array returns true
* `without(source, itemsToRemove)`: Takes 2 arrays as arguments and returns an array with the selected elements removed