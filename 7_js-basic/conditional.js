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

// conditionals -switch
const fruit = 'apple';
switch (fruit) {
    case 'banana':
        console.log('This is a banana');
        break; // quit the switch statement after the case is executed.
    case 'apple':
        console.log('This is an apple');
        break; // if break is not included, the next case
    case 'orange':
        console.log('This is an orange');
        break;
    default: // like else in if statement
        console.log('I do not know what fruit this is');
}

const score2 = prompt('Enter your score: ');
const value = Math.floor(score2 / 10);
switch (value) {
    case 10:
    case 9: // many cases can be assigned to the same code block
        alert('your grade is A');
        break;
    case 8:
        alert('your grade is B');
        break;
    case 7:
        alert('your grade is C');
        break;
    case 6:
        alert('your grade is D');
        break;
    default:
        alert('your grade is F');
}
