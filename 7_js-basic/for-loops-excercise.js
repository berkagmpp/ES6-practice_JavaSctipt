'use strict';

const data = [
    { membershipNumber: 1, name: 'John', age: 25, isMarried: false },
    { membershipNumber: 2, name: 'Jane', age: 30, isMarried: true },
    { membershipNumber: 3, name: 'Jim', age: 35, isMarried: false },
    { membershipNumber: 4, name: 'Jill', age: 40, isMarried: true },
    { membershipNumber: 5, name: 'Jack', age: 45, isMarried: false },
];

// 1) find people who are aged 30 or older
for (let i = 0; i < data.length; i++) {
    if (data[i].age >= 30) {
        console.log(
            'over 30: ',
            data[i].membershipNumber,
            data[i].name,
            data[i].age
        );
    }
}

// 2) find people who are not married
for (const person of data) {
    if (!person.isMarried) {
        console.log(
            'not married: ',
            person.membershipNumber,
            person.name,
            person.age
        );
    }
}

// 3) find people who are aged 30 or older and not married
for (const person of data) {
    if (person.age >= 30 && !person.isMarried) {
        console.log(
            'over 30 and not married: ',
            person.membershipNumber,
            person.name,
            person.age
        );
    }
}

// 4) display the members sum of age
let sum = 0;
for (const person of data) {
    sum += person.age;
}
console.log('sum of age: ', sum);

// 5) display the biggest age
let biggest = 0;
for (let i = 0; i < data.length; i++) {
    if (biggest < data[i].age) {
        biggest = data[i].age;
    }
}
// Math.max(...data.map((i)=>i.age));
console.log(`biggest age: ${biggest}`);

// 6) display the smallist age
let smallist = data[0].age;
for (let i = 1; i < data.length; i++) {
    if (smallist > data[i].age) {
        smallist = data[i].age;
    }
}
// Math.min(...data.map((i)=>i.age))
console.log(`smallist age: ${smallist}`);

const num = '0123456789';

// 7) display sum all number
let sum2 = 0;
const arrayN = Array.from(num, Number);
// Array.from() -> change to array.
// parameter Number -> change to number from string
for (const num of arrayN) {
    sum2 += num;
}
console.log(sum2);
