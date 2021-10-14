// INTERFACE

// type vs interface
// interfaces can only be used to describe a structure of an object
// types and interfaces can often be used interchangeably
// types can store union types inside of them (interfaces can not)
// interfaces are much more clear

// the interface can be used as a contract, a class has to implement and then adhere to it

// can only provide structure
// enforce structure on objects and classes
interface Named {
  readonly name?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

// allows to define structure of an object

let user1: Greetable;

user1 = {
  name: "Alex",
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

class Person implements Greetable {
  // Greetable, Named
  // can have more methods, but should implement all props of the Greetable interface
  age = 30;
  name?: string;

  constructor(n: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    console.log(phrase + this.name);
  }
}

const user2 = new Person("Maria"); // can create with or without a name

// console.log(user2);

// function interfaces

interface addFn {
  (a: number, b: number): number;
}

// optional properties
interface Optional {
  age?: number;
}

const add2nums: addFn = (a: number, b: number) => a + b;
