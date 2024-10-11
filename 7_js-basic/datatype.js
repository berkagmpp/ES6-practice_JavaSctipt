'use strict';

// @primitive data types: always have one value

// Number
let num = 10;
const num2 = 3.5;
const num3 = 5 / 0;
console.log(num3); // Infinity
console.log(typeof num3); // number

const num4 = -5 / 0;
console.log(num4); // -Infinity
console.log(typeof num4); // number

const num5 = 0 / 0;
console.log(num5); // NaN
console.log(typeof num5); // number

const num6 = 5 + '5';
console.log(num6); // 55
console.log(typeof num6); // number

const num7 = 5 - 'number';
console.log(num7); // NaN
console.log(typeof num7); // number

// String
const age = 25;
console.log('I am ' + age + ' years old.'); // Concatenation
console.log(`I am ${age} years old.`); // Template literals
console.log(`I am
    ${age} years old.`); // Multi-line string
console.log(`I am\n${age} years old.`); // Escape character
console.log(`I am \'25\' years old.`); // Escape character

('\n'); // New line
('\r'); // Carriage return
('\t'); // Tab
('\b'); // Backspace
('\f'); // Form feed
('\\'); // Backslash
("'"); // Single quote
('"'); // Double quote

// null and undefined
const x = null; // intentional empty value
console.log(x); // null
console.log(typeof x); // object (bug in JavaScript)

let y; // uninitialized value, const y; will throw an error
console.log(y); // undefined
console.log(typeof y); // undefined

// Object data types: can have multiple values
const person = {
    name: 'John',
    age: 25,
    isMarried: false,
    hobbies: ['reading', 'music', 'movies'],
    address: {
        city: 'New York',
        country: 'USA',
    },
}; // Object literal

// array
const arr = [1, 2, 3, 4, 5]; // Array literal
console.log(typeof arr); // object
arr.push(6); // object data type can be changed although 'const'
console.log(arr); // [1, 2, 3, 4, 5, 6]

const arr2 = new Array('a', 'b', 'c', 'd'); // Array constructor

// array-api frequently used

// length: the number of elements
console.log(arr2.length); // 6
console.log(arr2[arr2.length - 1]); // 4 brings the last element

// push: add the last element
arr2.push('world');
console.log(arr2); // ['a', 'b', 'c', 'd', 'world']

// forEach: iterate through each element
arr2.forEach((item, index) => {
    console.log(`index: ${index}`);
    // index: 0   index: 1    index: 2    index: 3    index: 4
    console.log(index, item);
    // 0 'a'    1 'b'    2 'c'    3 'd'    4 'world'
});

// pop: remove the last element
arr2.pop();
console.log(arr2); // ['a', 'b', 'c', 'd']

// shift: remove the first element
arr2.shift();
console.log(arr2); // ['b', 'c', 'd']

// unshift: add the first element
arr2.unshift('start');
console.log(arr2); // ['start', 'b', 'c', 'd']

// indexOf: find the index of the element
arr2.indexOf('c'); // 2
arr2.indexOf('z'); // -1 : not found

// splice: remove the element by index
arr2.splice(1, 2); // remove 2 elements from index 1
console.log(arr2); // ['start', 'd']

// array distructuring
// general way
const fruit = ['apple', 'banana', 'cherry'];
const app = fruit[0];
const ban = fruit[1];
const che = fruit[2];

// destructuring assignment
const [appl, bana, cher, ...others] = fruit;
console.log(appl); // apple
console.log(bana); // banana
console.log(cher); // cherry
console.log(others); // []

// spread syntax
const animals = ['dog', 'cat', 'rabbit'];
const newAnimals = [...animals, 'elephant']; // ... is spread syntax
console.log(newAnimals); // ['dog', 'cat', 'rabbit', 'elephant']

const plusAnimals = [...animals, ...newAnimals];
console.log(plusAnimals); // ['dog', 'cat', 'rabbit', 'dog', 'cat', 'rabbit', 'elephant']

// utilise rest parameter
sum('dog', 'cat', 'rabbit');
function sum(...values) {
    console.log(values);
    console.log(values[0]); // dog
    console.log(values[5]); // undefined
    values.forEach((value, index) => {
        console.log(index, value); // 0 dog    1 cat    2 rabbit
    });
}

// shallow copy: source and target have the same reference!
const source = ['alpha', 'bravo', 'charlie'];
const target = source; // reference copy
source[0] = 'delta';
console.log(target); // ['delta', 'bravo', 'charlie']
console.log(source); // ['delta', 'bravo', 'charlie']

//deep copy: source and target2 have different references!
const target2 = [...source];
source[0] = 'echo';
console.log(target2); // ['delta', 'bravo', 'charlie']
console.log(source); // ['echo', 'bravo', 'charlie']

const target3 = Array.from(source);
// array constructor syntax deep copy
