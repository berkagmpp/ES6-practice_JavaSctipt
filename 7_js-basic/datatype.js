'use strict';

// @primitive data types

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

// @Object data types
