/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here
function greet(name){
    console.log("Bonjour!");
}
greet();

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: 
// function declarations are for setting a permanent callable function, while function expression is used like an object, like a lambda expression

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here
const calculateArea = function(length, width){
    return length * width;
}
calculateArea(10, 30);

// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: 
//a callback function is like a delegate where in you can store functions in parameter like values
function wait (seconds, callback){
    //sleep by seconds here
    callback();
}
wait(2, () => {
    //do stuff
})
//this makes you call methods exactly 2 seconds from being it being originally called

// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here
let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];
function modifyArray (array, modify) {
    for (let index = 0; index < array.length; index++) array[index] = modify(array[index]);
}
modifyArray(numbers, (item) => item + 1);
console.log(numbers);

// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here

const { add, PI } = require('./mathUtils.js');
console.log(add(2, 4));
console.log(PI);

// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here

isPalindrome = require('./isPalindrome.js');
console.log(isPalindrome("bola"));
console.log(isPalindrome("racecar"));

// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: 
// module.exports and require takes values directly from the export list, making this an easier way to access variables than normal exporting