/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
const squares = numbers.map(item => item * item);
console.log(squares);

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
const even = numbers.filter(item => item % 2 == 0);
console.log(even);

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here
const sum = numbers.reduce((accumulate, item) => item + accumulate);
console.log(sum);

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here
console.log(words.map(item => item.toUpperCase()));

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here
console.log(words.filter(item => item.length > 4));

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here
console.log(words.reduce((accumulate, item) => accumulate + item));

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: 
//map - makes new array by processing every item according to the function
//filter - makes new array by adding every item that fits the conditions
//reduce - it "accumulates" the result per iteration