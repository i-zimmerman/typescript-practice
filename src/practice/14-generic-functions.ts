// intersection of 2 unknown objects results in unknown object,
// thus, TS doesn't know which props that unknown O has

// with generic types we tell TS that 2 objects will be of diff types
// therefore function will return an intersection of that types

function merge<T, U>(objA: object, objB: object) {
  return Object.assign(objA, objB);
}

const mergedObject = merge({ name: "Alex" }, { age: 26 });

// specify the generic types for the function call
// const mergedO = merge<string, number>({ name: "Alex" }, { age: 26 }); wont work (passing O)

// working with constrains
// the key word is extends here, constraining generic type
// the difference between extending g type and just providing object is
// that in the second case we get an unknown object with no future intersection
function merge1<T extends object, U extends object>(
  objA: object,
  objB: object
) {
  return Object.assign(objA, objB);
}

// another generic function with interface

interface Lengthy {
  length: number;
}

// don't care about the exact type, only care if it has length property
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "no value";

  if (element.length > 0) {
    descriptionText = `has ${element.length} elements`;
  }

  return [element, descriptionText];
}

// countAndDescribe(["hello", "world"]);
// countAndDescribe("hello world");

// keyof constraint
// making sure that second parameter should be any type of key in the object T
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value of ${obj[key]}`;
}

// extractAndConvert({ name: "Alex" }, "name");
