// 'this'
// 1. 'this' definition: 'this' is an object. 'this' = the caller
// In the global scope or in the default context, 'this' is the 'window' object.
// In arrow functions, 'this' behaves a bit differently.
// In strict mode, 'this' also behaves a bit differently.
const person = {
    name: 'John',
    age: 30,
    printThis() {
        console.log(this);
        console.log('this === person: ', this === person);
        console.log('this === window: ', this === window);
    },
};

person.printThis(); // { name: 'John', age: 30, printThis: [Function: printThis] }
// this === person:  true
// this === window:  false

const printThis = person.printThis;
printThis(); // undefined
// this === person:  false
// this === window:  true

function printThis1() {
    console.log(this); // defaut this => window
}
printThis1(); // window

const person1 = {
    name: 'Jane',
    printThis1: printThis1,
};
person1.printThis1(); // { name: 'Jane', printThis1: [Function: printThis1] }
// 'this' => person1

document.querySelector('#thisBtn').addEventListener('click', function () {
    console.log(this); // this => button
}); // { name: 'John', age: 30, printThis: [Function: printThis] }

// 2. bind method (ES5)

// change context of 'this' with bind method
function printThisFruit() {
    console.log(this);
}

const fruit = {
    name: 'apple',
};

let printThisFruit2 = printThisFruit.bind(fruit); // { name: 'apple' }
// can use bind method one time
printThisFruit2(); // { name: 'apple' }

// 1> pass fruit to printThisFruit parameter
// 2> return a new function(printThisFruit2) with the context of fruit
// 3> call the new function(printThisFruit2)

// 4. 'this' - callback function in object
// 4.1) 'this' in function declaration
const home = {
    name: 'my home',
    cleanHome: function () {
        setTimeout(function () {
            console.log(`cleaning ${this.name}`); // this => window
        }, 2000);
    },
};
home.cleanHome(); // cleaning
// 'this' => window
// this.name => undefined

// 4.2) this in arrow function
// arrow function does not have its own 'this' -> inherits from the parent scope
const home1 = {
    name: 'your home',
    cleanHome: function () {
        setTimeout(() => {
            console.log(`cleaning ${this.name}`); // this => home1
        }, 2000);
    },
};
home1.cleanHome(); // cleaning your home
// 'this' => home1

// 4.3) 'this' with bind method
// bind method can change the context of this
const home2 = {
    name: 'our home',
    cleanHome: function () {
        setTimeout(
            function () {
                console.log(`cleaning ${this.name}`);
            }.bind(this),
            2000
        );
    },
};
home2.cleanHome(); // cleaning our home
// 'this' => home2
