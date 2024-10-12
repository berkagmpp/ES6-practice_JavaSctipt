'use strict';
// conditionals -if, else if, else
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    const score = prompt('Enter your score: ');
    if (isNaN(score) || score == null || score > 100) {
        alert('Please enter a valid number');
    } else if (score >= 90) {
        alert('your grade is A');
    } else if (score >= 80) {
        alert('your grade is B');
    } else if (score >= 70) {
        alert('your grade is C');
    } else if (score >= 60) {
        alert('your grade is D');
    } else if (score < 60) {
        alert('your grade is F');
    }
});

// true and false
const value1 = -0;
const value2 = 0;
const value3 = null;
const value4 = undefined;
const value5 = NaN;
const value6 = '';
let value7;

if (value1) {
    console.log('value1 is true');
} else {
    console.log('value1 is false');
}
// console.log(`value1 is ${value1 == true}`);

if (value2) {
    console.log('value2 is true');
} else {
    console.log('value2 is false');
}

if (value7) {
    console.log('value3 is true');
} else {
    console.log('value3 is false');
}
