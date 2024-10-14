'use strict';

// string operators
console.log('hello' + 5); // string + number = string
console.log(typeof ('4' + 5)); // string
console.log('3' + 5 + 6); // 356 -> string
console.log(3 + 5 + '6'); // 86 -> string
// numbers can be converted to strings by using + operator with strings

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
// result is 16, because after the increment, the operation is executed
console.log('x:', x, 'y:', y); // x: 11 y: 5
// x is 11, because x is incremented by 1 before the operation

let a = 10;
let b = 5;
let result2 = a++ + b;
console.log('a++ + b:', result2); // 15
// result2 is 15, because after the operation, the increment is executed
console.log('a:', a, 'b:', b); // a: 11 b: 5
// a is 11, because a is incremented by 1 after the operation

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

k -= l; // k = k - l
console.log(k); // 4

k *= l; // k = k * l
console.log(k); // 20

k /= l; // k = k / l
console.log(k); // 4

// logical operators
const val1 = true;
const val2 = true;
const val3 = false;

// || (or): at least one of the values is true
console.log(val1 || val2); // true

// && (and): all of the values are true
console.log(val1 && val2); // true

// short circuit evaluation: if true is the first value, the operation stops -> efficiency
// put the simple or the most likely value first
console.log(val3 && val1); // false -> val3 is false, so the operation stops
console.log(val1 || val3); // true -> val1 is true, so the operation stops

// ! (not): opposite value
console.log(!val1); // false

// logical operators practice - login validation
const email = document.getElementById('email');
const password = document.getElementById('password');
const login = document.getElementById('btn');

btn.addEventListener('click', function () {
    const emailValue = email.value;
    const passwordValue = password.value;
    if (email.value === ' ' || !emailValue.includes('@')) {
        alert('Please enter your valid email');
    } else if (!passwordValue) {
        // if (passwordValue === ' '): passwordValue-> false, !passwordValue -> true
        alert('Please enter your password');
    } else {
        alert('Login successful');
    }
});

// conditional (ternary) operator
// condition ? true : false

const age = 20;
let message = null;

// basic if else statement
if (age >= 18) {
    message = 'You can vote';
} else {
    message = 'You cannot vote';
}
console.log(message); // 'You can vote'

// ternary operator
const message2 = age >= 18 ? 'You can vote' : 'You cannot vote';
console.log(message2); // 'You can vote'
