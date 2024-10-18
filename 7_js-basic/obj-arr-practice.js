'use strict';
// objects and arrays

// 1. map and spread operator
// change all the names to 'Park' in the array below.
let students = [
    { id: 1, name: 'Kim', score: { math: 50, english: 70 } },
    { id: 2, name: 'Kim', score: { math: 80, english: 60 } },
    { id: 3, name: 'Lee', score: { math: 70, english: 50 } },
];

const newStudents = students.map((students) => ({ ...students, name: 'park' }));
// map() -> change the array. it returns a new array. can use only array.
// spread(...students) -> copy the value of students array.
// name(value of students) -> change the name to 'park'.
// By wrapping the object in parentheses, you make it clear to JavaScript that you intend to return an object, not define a function body.
console.log(newStudents);

// 2. filter, map, and spread operator
// Find the people with the name 'Kim' in the array below, and add science: 100 and history: 100 to their score
let students2 = [
    {
        id: 1,
        name: 'Kim',
        score: { math: 50, english: 70, korean: 30, physics: 60 },
    },
    {
        id: 2,
        name: 'Kim',
        score: { math: 80, english: 60, korean: 40, physics: 40 },
    },
    {
        id: 3,
        name: 'Lee',
        score: { math: 70, english: 50, korean: 50, physics: 80 },
    },
];
const newStudents2 = students2
    .filter((item) => item.name === 'Kim')
    .map((students2) => ({
        ...students2,
        score: { ...students2.score, science: 100, history: 100 },
    }));
// filter() -> filter the array. it returns a new array. can use only array.
// in map(), spread(...students2) -> copy the value of students2 array.

console.log(newStudents2);
