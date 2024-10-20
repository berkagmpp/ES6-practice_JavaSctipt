'use strict';
// objects and arrays

// 1. map() and spread operator
// map() -> change the array. it returns a new array. can use only array.

// change all the names to 'Park' in the array below.
const students = [
    { id: 1, name: 'Kim', score: { math: 50, english: 70 } },
    { id: 2, name: 'Kim', score: { math: 80, english: 60 } },
    { id: 3, name: 'Lee', score: { math: 70, english: 50 } },
];

const newStudents = students.map((students) => ({ ...students, name: 'park' }));
// spread(...students) -> copy the value of students array.
// name(value of students) -> change the name to 'park'.
// By wrapping the object in parentheses, you make it clear to JavaScript that you intend to return an object, not define a function body.
console.log(newStudents);

// 2. filter(), map(), and spread operator
// filter() -> filter the array. it returns a new array. can use only array.

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

/**
* 4. reduce(), the spread operator and destructurin
* reduce() -> accumulate the value of each element in the array iteratively
* values can be returned in the desired shape (numbers, objects, arrays, etc)

* full----array.reduce((accumulator, currentValue, index, array) => {...}, initialValue);
* easily----array.reduce((previousValue(+accumulate), currentValue) => {// code here}, initialValue)
* accumulator -> the value of return of the previous callback function or initialValue.
* currentValue -> current value of element in the array.
* index -> the index of the current element.(optional)
* array -> the array that reduce() was called upon.(optional)
* initialValue -> the initial value of accumulator.(optional)
* If no initialValue, the first element of the array is used as the initial value, and the iteration starts from the second element.
*/

// Write a function to calculate the total sum of all scores, regardless of the number of students
let students4 = [
    { id: 1, name: 'Kim', score: { math: 50, english: 70 } },
    { id: 2, name: 'Park', score: { math: 80, english: 60 } },
    { id: 3, name: 'Lee', score: { math: 70, english: 50 } },
    { id: 4, name: 'Choi', score: { math: 70, english: 50 } },
];

const total = students4.reduce((sum, newScore) => {
    // newScore -> the value of students4 array.
    const { math, english } = newScore.score;
    return sum + math + english;
    // return the sum of sum and math + english.
    // the value of sum is the sum of the previous iteration.
}, 0); // the initial value of sum is 0.
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

// 5.1) reduce() objects array practice
const friends = [
    { name: 'John', age: 20 },
    { name: 'Chris', age: 25 },
    { name: 'Tom', age: 30 },
    { name: 'Jane', age: 22 },
    { name: 'Jill', age: 27 },
];

// 5.1.1) sum the ages of all friends
const ageSum = friends.reduce((sum, friend) => {
    return sum + friend.age;
}, 0);
console.log(ageSum);
////////////////////////////////////////////

const array2 = [1, 1, 2, 3, 3, 5];

// 5.1.2) remove duplicate numbers in an array
const uniqueNum = array2.reduce((acc, cur) => {
    // acc is the accumulator, cur is the current value
    if (acc.indexOf(cur) === -1) {
        // indexOf() returns the index of the first occurrence of the current value in the accumulator
        // -1 means not found: if the current value is not found in the accumulator
        acc.push(cur);
    }
    return acc;
}, []);
console.log(uniqueNum);
