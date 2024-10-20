'use strict';

// 1. object definition and properties
// 1.1) object is a collection of properties
// object can contain multiple data types, other objects, functions (method), and arrays
// properties are key-value pairs: key is a string (unique), value can be any data type

const person = {
    // defined by curly braces {}
    name: 'John', // key: value - property
    age: 30,
    city: ['New York', 'Boston'], // array
    hobby: {
        //
        name: 'reading',
        level: 'beginner',
    },
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
// 1.2) object properties can be accessed by dot notation (.) or bracket notation ([])
console.log(person.name); // John
console.log(person['age']); // 30
console.log(person.city[0]); // New York
console.log(person.hobby.name); // reading
console.log(person['hobby']['level']); // beginner
console.log(person.hobby['name']); // reading    can mix dot and bracket notation
console.log(person['hobby'].level); // beginner  can mix dot and bracket notation

// 1.3) object is mutable (can be changed)
person.name = 'Jane'; // update property
console.log(person.name); // Jane
console.log(typeof person); // object

// 1.4) object can be copied by reference (shallow copy)
const person2 = person; // copy by reference
person2.name = 'Mike';
console.log(person.name); // Mike

// 1.5) object can be copied by value (deep copy)
const person3 = { ...person }; // copy by value
person3.name = 'Alice';
console.log(person.name); // Mike
console.log(person3.name); // Alice

// 1.6) object properties can be added, updated, and deleted
delete person4.age; // delete property
console.log(person4.age); // undefined

// 1.7) object methods are functions defined in an object
person.sayHello(); // Hello
person.sayBye(); // Bye

// 1.8) object methods can be added, updated, and deleted
person.sayHi = function (name) {
    console.log(`Hi ${name}`);
};
person.sayHi(); // Hi undefined
person.sayHi('Tom'); // Hi Tom

// 1.9) object methods can access object properties using 'this' keyword
person.sayHello = function () {
    console.log(`Hello ${this.name}`);
};
person.sayHello(); // Hello Mike

// 1.10) object can be iterated by for in loop
for (let key in person) {
    console.log(key, person[key]);
}
// name Mike
// age 30
// city New York, Boston
// sayHello [Function: sayHello]
// sayBye [Function: sayBye]
// sayHi [Function: sayHi]

// 2. object conversion

const player = {
    name: 'plyer1',
    score: 0,
    level: 1,
    uplevel() {
        this.level++;
    },
};
// 2.1) object can be converted to an array by Object.keys(), Object.values(), Object.entries()
const playerKeys = Object.keys(player); // get keys of the object
console.log(playerKeys); // ['name', 'score', 'level']
const playerValues = Object.values(player); // get values of the object
console.log(playerValues); // ['player1', 0, 1]
const playerEntries = Object.entries(player); // get key-value pairs of the object
console.log(playerEntries); // [['name', 'player1'], ['score', 0], ['level', 1]]

// 2.2) object can be converted to JSON string by JSON.stringify()
const playerJSON = JSON.stringify(player);
console.log(playerJSON); // {"name":"player1","score":0,"level":1}

// 2.3) object can be converted to a map by Object.entries() and new Map()'
const playerMap = new Map(Object.entries(player));
console.log(playerMap); // Map { 'name' => 'player1', 'score' => 0, 'level' => 1 }

// 2.4) object can be converted to an array by Array.from()
const playerArray = Array.from(player);
console.log(playerArray); // ['player1', 0, 1]

// 2.5) object can be converted to an object by Object.fromEntries()
const playerObject = Object.fromEntries(playerEntries);
console.log(playerObject); // { name: 'player1', score: 0, level: 1 }

// 3. create object
// 3.1) object literal syntax
// define object by using curly braces {}
// key: value pairs are separated by ',' inside {}
const obj = {
    key1: 'value1',
    key2: 'value2',
};

console.log(obj); // { key1: 'value1', key2: 'value2' }

// 3.2) object constructor syntax
// define object by using new Object(): new is an operator and Object is a constructor function
const obj2 = new Object();
obj2.key1 = 'value1';
obj2.key2 = 'value2';

console.log(obj2); // { key1: 'value1', key2: 'value2' }

// 4. destructuring object
const bag = {
    color: 'red',
    size: 'medium',
    weight: 2,
};
// 4.1) general destructuring
const color = bag.color;
const size = bag.size;
const weight = bag.weight;

// 4.2) destructuring assignment: assign object properties to multiple variables
const { color2, size2, weight2 } = bag; // destructuring assignment
console.log(color2, size2, weight2); // red medium 2

// 4.3) destructuring assignment: function parameters get object properties
function bagInfo({ color, size, weight }) {
    console.log(`color: ${color}, size: ${size}, weight: ${weight}`);
}
bagInfo(bag); // color: red, size: medium, weight: 2

// 5. factory function
// factory function is a function that returns an object
function createBag(color, size, weight) {
    return {
        // return an object like factory
        color,
        size,
        weight,
    };
}
const bag2 = createBag('blue', 'small', 1);
const bag3 = createBag('green', 'large', 3);
const bag4 = createBag('yellow', 'medium', 2);
console.log(bag2); // { color: 'blue', size: 'small', weight: 1 }
console.log(bag3); // { color: 'green', size: 'large', weight: 3 }
console.log(bag4); // { color: 'yellow', size: 'medium', weight: 2 }

// abbreviation of the object property (ES6)
const kind = 'fruit';
const taste = 'sweet';
const price = 3;
function createFruit(kind, taste, price) {
    return {
        kind, // kind: kind -> abbreviation (when the key and value are the same)
        taste, // taste: taste
        price, // price: price
    };
}

// 6. call by value and call by reference
// 6.1) call by value: primitive data types (number, string, boolean, null, undefined)
let studentName = 'Alice'; // primitive data type

console.log(studentName); // Alice
changeName(studentName);
console.log(studentName); // Alice (unchanged): because the primitive data type has a value
// changeName(studentName) duplicate the value of studentName and pass it to the function
// the function parameter is changed inside the function, but the variable is not changed
// studentName is Alice, and name(inside changeName()) is Bob: deferent memory location

function changeName(name) {
    name = 'Bob';
    console.log(name); // Bob
}

// 6.2) call by reference: object data types (object, array, function)
let student = {
    name: 'Alice',
}; // object data type

console.log(student.name); // Alice
changeName(student);
console.log(student.name); // Bob (changed): because the object data type has a reference
// student parameter of changeName(student) is not a copy of student, but a reference of student object
// student is a reference of the object, so the reference(location) is passed to the function
// as a result, reference of student object and name object is the same

// 7. object copy by reference and by value
const banana = {
    color: 'yellow',
    price: 2,
};

let mango = banana; // copy by reference
// mango and banana are looking at the same value in memory
mango.color = 'green';
console.log(banana.color); // green (changed): because the object is copied by reference

banana.price = 3; // price value of reference of banana is changed (not the reference itself)

// banana = {
//     weight: 1,
// }; // error: because the reference of banana cannot be added or changed

// 7.1) using spread operator(...) to copy by value (ES6)
const apple = {
    ...banana, // spread operator: copy by value
};
apple.color = 'red';
console.log(banana.color); // green (unchanged): because the object is copied by value

// 7.2) using Object.assign() to copy by value
const orange = Object.assign({}, banana); // copy by value
orange.color = 'orange';
console.log(banana.color); // green (unchanged): because the object is copied by value

// 8. for in loop (ES6)
// for in loop is used to iterate through the properties of an object
// for in loop is used for objects, not for arrays
for (let key in banana) {
    console.log(key, banana[key]);
}
// color green  price 3    // key: value

// 9. check a property exists in an object
// 9.1) in operator
// in operator is used to check if a property exists in an object
console.log('color' in banana); // true
console.log('weight' in banana); // false

// 9.2) Object.hasOwn(), object.hasOwnProperty()
console.log(banana.hasOwnProperty('color')); // true
console.log(Object.hasOwn(banana, 'color')); // true

window.onload = () => {
    // ...code to be executed
};
