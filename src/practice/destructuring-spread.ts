// arrow functions with 1 argument
const printOut: (a: number | string) => void = (output) => console.log(output);

const addNum = (a: number, b: number = 1) => a + b; // default parameters
// make sure parameters without default value come first.

// rest parameters / spread operator
const addSpread = (...numbers: number[]) => {
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
