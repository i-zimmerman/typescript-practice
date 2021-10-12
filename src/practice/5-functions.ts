function add(n1: number, n2: number) {
  return n1 + n2; // return infers the type
}

function printResult(num: number) {
  console.log("Result: " + num);
}
// void in callback tells that we are not going to do anything with the return value
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

// let combineValue: Function;
let combineValue: (a: number, b: number) => number;

// combineValue = printResult;
combineValue = add;

console.log(combineValue(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
