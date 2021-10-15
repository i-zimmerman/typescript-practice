// Generic type - a type which is connected to another type,
// where we want to know what this other type is,
// so TS can give us better support

// TS knows what data that array stores
const names: Array<string | number> = ["Alex", "Valeriya"]; // same as string[]
// names[0].toLowerCase(); wil not work

// TS knows what data promise will resolve
const promise: Promise<string> = new Promise((res, rej) => {
  setTimeout(() => {
    res("hello world");
  }, 2000);
});

promise.then((result: string) => console.log(result.toLocaleUpperCase()));

// GENERIC TYPES VS UNION TYPES

// with union types you should decide on which type to use every time you declare
// a method in a class
// can result in problem like

// declare a data structure with one of the decided types
// declare a method that pushes value to an array with UT
// Problem will emerge in the method, since you decided on the arr type
// but method allows to push different types in singly typed array

// Generic types lock in a type
