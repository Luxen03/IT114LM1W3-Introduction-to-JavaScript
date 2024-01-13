/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
var bola = "dudu dudu dudu";
var bolaQuan = 2;

// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let ipis = "pspsps pspsps";
let ipisQuan = 10;

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const daga = "shw shw shw";
const dagaQuan = 3;

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: 
// var is accessible anywhere in the funtion after the decleration
// let is accessible anywhere in the code block after the decleration
// const variables cannot be reassign

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
for (let i = 0; i < 3; i++) console.log(daga + " " + ipis + i);
console.log(dagaQuan / ipisQuan);

// Checkpoint 1.2 What operators did you use?
// Answer: 
// Your code here
// + addition operator
// = assignment operator
// < less than operator
// ++ incremental operator
// / division operator

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
console.log(daga + " " + ipis);


// Checkpoint 1.3 What operators did you use?
// Answer:
// + addition operator

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
for (let i = 0; i < 3; i++) console.log(dagaQuan / ipisQuan);

// Checkpoint 1.4 What operators did you use?
// Answer: 
// < less than operator


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
let bolaList = [0, 1, 2, 3, 4]
console.log(1 in bolaList);

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: 
// Your code here
// true, it checks if the list is empty
// in operator