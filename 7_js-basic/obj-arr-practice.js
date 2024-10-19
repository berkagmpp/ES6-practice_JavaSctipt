'use strict';
// objects and arrays

// 1. map() and spread operator
// change all the names to 'Park' in the array below.
const students = [
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

// 2. filter(), map(), and spread operator
// Find the people with the name 'Kim' in the array below, and add science: 100 and history: 100 to their score
const students2 = [
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
    // filter() -> filter the array. it returns a new array. can use only array.
    .map((students2) => ({
        ...students2,
        score: { ...students2.score, science: 100, history: 100 },
    }));
// in map(), spread(...students2) -> copy the value of students2 array.

console.log(newStudents2);

// 3. map(), the spread operator and destructuring
// add a sum: (total score) property to the score object for each student in the array
const students3 = [
    { id: 1, name: 'Kim', score: { math: 50, english: 70 } },
    { id: 2, name: 'Park', score: { math: 80, english: 60 } },
    { id: 3, name: 'Lee', score: { math: 70, english: 50 } },
];

let newStudents3 = students3.map((students3) => {
    const { math, english } = students3.score;
    // destructuring -> extract the value of math and english from students3.score.
    return { ...students3, score: { ...students3.score, sum: math + english } };
    // return the object with the value of sum: math + english.
});
console.log(newStudents3);

// 4. reduce(), the spread operator and destructurin
// Write a function to calculate the total sum of all scores, regardless of the number of students
let students4 = [
    { id: 1, name: 'Kim', score: { math: 50, english: 70 } },
    { id: 2, name: 'Park', score: { math: 80, english: 60 } },
    { id: 3, name: 'Lee', score: { math: 70, english: 50 } },
    { id: 4, name: 'Choi', score: { math: 70, english: 50 } },
];

const total = students4.reduce((sum, newScore) => {
    // reduce() -> reduce the array to a single value. can use only array.
    // sum -> the initial value is 0.
    // newScore -> the value of students4 array.
    const { math, english } = newScore.score;
    return sum + math + english;
    // return the sum of sum and math + english.
    // the value of sum is the sum of the previous iteration.
}, 0);
console.log(total);

// 5) reduce(), the spread operator and destructurin + 'rest operator'
const sum = (...array) => {
    // rest operator -> change the array to the array.
    return array.reduce((sum, newScore) => {
        const { math, english } = newScore.score;
        return sum + math + english;
    }, 0);
};
const result = sum(...students4);
console.log(result);
