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
