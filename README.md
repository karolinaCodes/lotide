# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @karolinas/lotide`

**Require it:**

`const _ = require('@karolinas/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- countLetters(string): counts the number of occurences of all characters in a string.
- countOnly(allItems, itemsToCount): given an array (allItems), counts the number of times the items in the object itemsTocount occur.
- eqArrays(array1, array2): deeply compares whether two arrays are equal (including nested arrays).
- eqObjects(obj1, obj2): deeply compares whether two objects are equal (including nested objects).
- findKeys(obj, callback): return the key for the first value defined by the callback function returning true.
- finKeyByValue(object, value): Find the first key whos value matches the value provided.
- head(array): return the head (first element) of the array.
- tail(array): return the tail (the elements following the first element) of the array.
- middle(array): return and array of the middle most value in an array. returns a 2 element array if even number of items in array.
- letterPositions(string): returns an object with an array of the indeces of every character in the provided string.
- map(array, callback): maps the elements of the array to a new array for all values in the array in which the callback returns true.
- takeUntil(array, callback): returns a slice of the array, containing up to, but not including, the first value in the array in which the callback returns true.
- without(array, itemsToRemove): returns a new array with all the items in 'itemToRemove' removed.
- assertEqual(value1, value2): asserts whether 2 values are equal
- assertArraysEqual(array1, array2): deeply asserts whether 2 arrays are equal.
- assertObjectsEqual(obj1, obj2): deeply asserts whether two objects are equal.
