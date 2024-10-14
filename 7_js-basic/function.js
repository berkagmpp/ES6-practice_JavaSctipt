'use strict';

// function declaration
// function declaration is hoisted
function greet(name, age) {
    // name and age are parameters -> can use in the function
    console.log(`Hello ${name}, you are ${age} years old.`);
}
greet('John', 30); // Hello John, you are 30 years old.

// function expression
// function is a first-class object in JavaScript -> can be assigned to a variable
// function expression is not hoisted -> must be defined before calling
const greet2 = function (name, age) {
    console.log(`Hello ${name}, you are ${age} years old.`);
};
greet2('Jane', 25); // Hello Jane, you are 25 years old.

// arrow function: shorter syntax for function expression -> es6
// 1) no 'function' keyword
// 2) arrow function does not have its own 'this' -> inherits from the parent scope
// 3) arrow function is not hoisted -> must be defined before calling
const greet3 = (name, age) => {
    console.log(`Hello ${name}, you are ${age} years old.`);
};
// 4) if there is only one parameter, the parentheses can be omitted
// 5) if there is only one statement, the curly braces can be omitted
const greet4 = (name) => {
    console.log(`Hello ${name}.`);
};
// const greet5 = name => console.log(`Hello ${name}.`);
// 6) no 'return' keyword
const hellow = (name) => `hello ${name}`; // return the value without 'return' keyword
const str = hellow('you!'); // assign the return value to a variable by assignment operator
console.log(str); // hello you!

// return statement
function add(a, b) {
    return a + b; // return the value of the expression
}
let sum = add(5, 3); // assign the return value to a variable by assignment operator
console.log(sum); // 8

// annonymous function: function without a name <- not necessary to reuse
// used as a callback function
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(function (fruit) {
    // forEach method takes a callback function as an argument
    console.log(fruit);
});

// immediately invoked function expression (IIFE): function is called immediately after defining
// prevent the global scope pollution
// syntax (function(){})()
(function () {
    console.log('IIFE');
})();

// default parameters values
// if the parameter is not passed, the default value is used
function sum2(a = 0, b = 0) {
    console.log(`a: ${a}, b: ${b}`); // a: 5, b: 0
    return a + b;
}
console.log(`sum2: ${sum2()}`); // a: 0, b: 0 sum2: 0
console.log(`sum2: ${sum2(5)}`); // a: 5, b: 0 sum2: 5

// functions and variables naming
// both use camel case
// functions: verb + noun       ex) getFruit, setFruit
// variables: noun      ex) fruits, usernames, removeItem
