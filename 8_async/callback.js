'use strict';

// 1. callback function definition
function sayHello(name, callback) {
    const words = `Hellow, my name is ${name}.`;
    callback(words);
}

sayHello('Claire', function (name) {
    console.log(name);
});

// 2. principle of using callback function
// 2.1) a one-time use for the call function: anonymous and arrow function
function sayHelloWithCallback(callback) {
    let name = 'Alice';
    callback(name); // call the callback function with the argument
}

sayHelloWithCallback((name) => {
    //// anonymous arrow function
    console.log('Hello, ' + name);
}); // Hello, Alice

// 2.2) a reusable function for the call function: named function
// Change only the callback function to pass to the parameter
// as in the slightly complicated case below:
function introduce(firstName, lastName, callback) {
    let fullName = firstName + lastName;
    callback(fullName);
}

function say_hello(name) {
    console.log(`hi, my name is ${name}.`);
}

function say_bye(name) {
    console.log(`goodbye, ${name} is leaving.`);
}

introduce('Claire', 'Ahn', say_hello); // can use the function as an argument by calling the named function
// hi, my name is Claire Ahn.

introduce('Derek', 'Park', say_bye); // use another function as an argument by calling the named function
// goodbye, Derek Park is leaving.

// 3. callback function use case
// 3.1) higher-order function like forEach()
let numbers = [1, 2, 3, 4, 5];
let doubled = [];

// excute the function for each element in number array
numbers.forEach(function (num) {
    doubled.push(num * 2);
    // double the value of each element as callback function and push it to the doubled array
});

console.log(doubled); // [2, 4, 6, 8, 10]

// 3.2) addEventListener()
let button = document.getElementById('button');

button.addEventListener('click', function () {
    // callback function
    console.log('Button clicked!');
});

// 3.3) Timer Execution Function like setTimeout(), setInterval()
setTimeout(function () {
    // callback function
    console.log('3 seconds passed.');
}, 3000); // 3 seconds later

// 3.4) get AJAX Request result
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    // if the fetch method is successful, receive the response
    // and convert it to json format by json() method (callback function)
    .then((json) => console.log(json));
// if the json() method is successful, receive the json format data
// and print it to the console (callback function)

// 4. callback function precautions in js
// if use 'this' keyword in the callback function, it may cause an error
// because the callback function does not have its own 'this' keyword
// it inherits the 'this' keyword from the parent scope
// const userData = {
//     signUp: '2021-4-06 12:00:00',
//     name: 'Not Set',
//     setName: function (firstName, lastName) {
//         this.name = firstName + ' ' + lastName;
//     },
// };

// function getUserName(firstName, lastName, callback) {
//     callback(firstName, lastName);
// }

// getUserName('Quennie', 'Paker', userData.setName);

// console.log('1: ', userData.name); // Not Set
// console.log('2: ', window.name); // Quennie Paker

//Directly call and run as an object's method: userdata.name property values are updated normally
let userData = {
    name: 'Not Set',
    setName: function (firstName, lastName) {
        this.name = firstName + ' ' + lastName;
    },
};

userData.setName('Quennie', 'Lim');

console.log(userData.name);

// Passed by callback function: The method of the object was not passed as it was, but as a function that acts as a callback function
// function getUserName(firstName, lastName, callback) {
//     callback(firstName, lastName);
// }

// // This callback function is an independent function that has no relationship with userData.setName.
// getUserName('Lime', 'Baker', function (firstName, lastName) {
//     this.name = firstName + ' ' + lastName;
// });

// console.log('1: ', userData.name); // Not Set
// console.log('2: ', window.name); // Lime Baker
// Because it is an independent method that has no association with the userData object, this in the callback function does not indicate the userData object.
// In general, functions that call the callback function do not set this separately, so the global object is bound by default.

// Create a callback function to protect 'this' within the callback function
// 1) using call(), apply(), bind()

// call() : Use 'this' object as the first factor, the remaining argumants are separated by ','
function getUserName(firstName, lastName, callback, data) {
    // add data parameter that would be get userDate object
    callback.call(data, firstName, lastName); // using data object as 'this' object
}

getUserName('Jack', 'Do1', userData.setName, userData); // pass userData object as a parameter

console.log('1: ', userData.name); // Jack Do1
console.log('2: ', window.name); // Not Set

// apply() : Use 'this' object as the first factor, the remaining argumants are an array
function getUserName2(firstName, lastName, callback, data) {
    // add data parameter that would be get userDate object
    callback.apply(data, [firstName, lastName]); // using data object as 'this' object and pass the array as arguments
}

getUserName2('Jack', 'Do2', userData.setName, userData); // pass userData object as a parameter

console.log('1: ', userData.name); // Jack Do2
console.log('2: ', window.name); // Not Set

// bind() : Create a new function with the 'this' object and the arguments
function getUserName3(firstName, lastName, callback, data) {
    // add data parameter that would be get userDate object
    let bound = callback.bind(data); // create a new function with the data object as 'this'
    bound(firstName, lastName); // call the new function with the arguments
}

getUserName3('Jack', 'Do3', userData.setName, userData); // pass userData object as a parameter

console.log('1: ', userData.name); // Jack Do3
console.log('2: ', window.name); // Not Set

// 2) using arrow function
// arrow function does not have its own 'this' keyword
// it inherits the 'this' keyword from the parent scope
function getUserName4(firstName, lastName, callback) {
    callback(firstName, lastName);
}

getUserName4('Jack', 'Do4', (firstName, lastName) => {
    userData.setName(firstName, lastName);
});

console.log('1: ', userData.name); // Jack Do4
console.log('2: ', window.name); // Not Set
