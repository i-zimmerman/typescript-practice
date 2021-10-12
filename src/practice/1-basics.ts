console.log("code");

// Core syntax and features
// Core types

/*
Typescript uses static types, set during development.
Javascript uses dynamic types, resolved at runtime.

The core task of Typescript to check types and yell at us if the type is incorrect!
if you don't init var immediately like let result; then it's a good practice to spec. type.
*/

function addNums(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (!showResult) return;
  console.log(phrase + result);
}
let number1: number;
number1 = 5;
const number2 = 6;
const showResult = true;
const phrase = "The result is: ";

addNums(number1, number2, showResult, phrase);
