'use strict';

// string operators
console.log('hello' + 5); // string + number = string
console.log(typeof ('4' + 5)); // string
console.log('3' + 5 + 6); // 356 -> string
console.log(3 + 5 + '6'); // 86 -> string

// number operators
const num1 = 3;
const num2 = 2;
console.log(num1 + num2); // 5
console.log(num1 - num2); //
console.log(num1 * num2); // 6
console.log(num1 / num2); // 1.5
console.log(num1 % num2); // 1 -> remainder
console.log(num1 ** num2); // 9 -> exponentiation

// increment and decrement operators
let counter = 2;
const preIncrement = ++counter; // after the increment, the operation is executed
const postIncrement = counter++; // after the operation, the increment is executed
const preDecrement = --counter;
const postDecrement = counter--;
// preIncrement: 3, postIncrement: 3, preDecrement: 2, postDecrement: 2
// data type can be changed by increment and decrement operators

let x = 10;
let y = 5;
console.log('x:', x, 'y:', y);
let result = ++x + y;
console.log('++x + y:', result); // 16
console.log('x:', x, 'y:', y); // x: 11 y: 5
let a = 10;
let b = 5;
let result2 = a++ + b;
console.log('a++ + b:', result2); // 15
// result2 is 15, because after the operation, the increment is executed like below
console.log('a:', a, 'b:', b); // a: 11 b: 5

// comparison operators
// always return boolean value --> true or false
const value1 = 10;
const value2 = 15;
console.log(value1 < value2); // true
console.log(value1 >= value2); // false

const value3 = 10;
const value4 = '10';
console.log(value3 == value4); // true
// ==: loose equality operator, the same value but different types
// type coercion: JavaScript automatically converts the data type from string('10) to number(10)
console.log(value3 === value4); // false
// ===: strict equality operator, the same value and the same type
// always use === to avoid bugs
console.log(value3 !== value4); // true
// !==: strict inequality operator
console.log(value3 != value4); // false
// !=: loose inequality operator
// != -> convert the string to number, so value3 and value4 are the same

// === and !== are recommended to use
// == and != are not recommended to use

// assignment operators
let k = 10;
const l = 5;

k = 4; // =: assignment operator
console.log(k); // 4

k += l; // k = k + l
console.log(k); // 9
