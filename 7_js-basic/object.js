'use strict';

// 1. object definition and properties
// object is a collection of properties
// object can contain multiple data types, other objects, functions (method), and arrays
// properties are key-value pairs: key is a string (unique), value can be any data type

const person = {
    // defined by curly braces {}
    name: 'John', // key: value - property
    age: 30,
    city: 'New York',
    sayHello: function () {
        // this is an object methods
        // define method look like this
        console.log('Hello');
    },
    sayBye() {
        // also define method look like this
        console.log('Bye');
    },
};
// object properties can be accessed by dot notation (.) or bracket notation ([])
console.log(person.name); // John
console.log(person['age']); // 30

// object is mutable (can be changed)
person.name = 'Jane'; // update property
console.log(person.name); // Jane
console.log(typeof person); // object

// object can be copied by reference (shallow copy)
const person2 = person; // copy by reference
person2.name = 'Mike';
console.log(person.name); // Mike

// object can be copied by value (deep copy)
const person3 = { ...person }; // copy by value
person3.name = 'Alice';
console.log(person.name); // Mike
console.log(person3.name); // Alice

// object is created by using object literal or constructor
const person4 = new Object(); // object constructor
person4.name = 'Bob';
console.log(person4.name); // Bob

// object properties can be added, updated, and deleted
delete person4.age; // delete property
console.log(person4.age); // undefined

// object methods are functions defined in an object
person.sayHello(); // Hello
person.sayBye(); // Bye

// object methods can be added, updated, and deleted
person.sayHi = function (name) {
    console.log(`Hi ${name}`);
};
person.sayHi(); // Hi undefined
person.sayHi('Tom'); // Hi Tom

// object methods can access object properties using 'this' keyword
person.sayHello = function () {
    console.log(`Hello ${this.name}`);
};
person.sayHello(); // Hello Mike

// object can be destructured
const { city, age } = person; // destructuring
console.log(city); // New York
console.log(age); // 30

// object can be iterated by for in loop
for (let key in person) {
    console.log(key, person[key]);
}
// name Mike
// age 30
// city New York
// sayHello [Function: sayHello]
// sayBye [Function: sayBye]
// sayHi [Function: sayHi]

// 2. object conversion
// object can be converted to an array by Object.keys(), Object.values(), Object.entries()
// object can be converted to JSON string by JSON.stringify()
// object can be converted to a map by Object.entries() and new Map()
// object can be converted to an array by Array.from()
// object can be converted to an object by Object.fromEntries()
// object can be converted to a string by Object.toString()
// object can be converted to a number by Number()
// object can be converted to a boolean by Boolean()
// object can be converted to a symbol by Symbol()
// object can be converted to a date by new Date()
// object can be converted to a function by Function()
// object can be converted to a regular expression by RegExp()
// object can be converted to a promise by Promise.resolve()
// object can be converted to a set by Object.keys() and new Set()
// object can be converted to a map by Object.keys() and new Map()
// object can be converted to an array buffer by ArrayBuffer()
// object can be converted to a data view by DataView()

// create object
// 1)
