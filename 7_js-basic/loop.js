'use strict';

const fruits = ['apple', 'banana', 'cherry', 'orange', 'kiwi'];
const person = {
    name: 'John',
    age: 30,
    city: 'New York',
};

// for loop
let keys = Object.keys(person); // allocate the keys of the object to array variable
console.log(keys); // access the value of the object by using the keys array
// ['name', 'age', 'city']

for (let i = 0; i < keys.length; i++) {
    console.log(person[keys[i]]);
}
// 'John' 30 'New York'

console.log('---------------------');

// for in loop (es6): for objects
for (let key in person) {
    // key is the index of the array
    console.log(key, person[key]); // fruits[key] is the value of the array
}
// 'name' 'John' 'age' 30 'city' 'New York'

// for of loop (es6): for arrays
for (let fruit of fruits) {
    console.log(fruit);
}
// 'apple' 'banana' 'cherry' 'orange' 'kiwi'

console.log('---------------------');

// while loop
let count = 0;
while (count < 6) {
    console.log(count);
    count++; // if this line is not included, the loop will run infinitely
}
// 0 1 2 3 4 5

// do while loop
let count2 = 10;
do {
    console.log(count2);
    count2++;
} while (count2 < 6); // do while loop runs at least once even if the condition is false
// 10

console.log('---------------------');

// break and continue
let count3 = 0;
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // skip the current iteration
    }
    if (i === 8) {
        break; // quit the loop
    }
    console.log(i);
}
// 0 1 2 3 4 6 7
