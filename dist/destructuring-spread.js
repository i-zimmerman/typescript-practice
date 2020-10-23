"use strict";
// arrow functions with 1 argument
const printOut = (output) => console.log(output);
const addNum = (a, b = 1) => a + b; // default parameters
// make sure parameters without default value come first.
// rest parameters / spread operator
const addSpread = (...numbers) => {
    return numbers.reduce((acc, val) => {
        return acc + val;
    }, 0);
};
// console.log(addSpread(1, 2, 3, 4, 5, 6));
// array and object destructuring
const [hobby1, hobby2, ...remainingHobbies] = [
    "Skating",
    "Swimming",
    "Reading",
];
// console.log(hobby1);
// by key name only
const { firstName, age: a } = { firstName: "Annie", age: 25 };
// console.log(a);
