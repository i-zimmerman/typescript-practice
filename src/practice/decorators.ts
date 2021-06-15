// Decorators run at the class definition
// You don't need to instantiate it

// _ signals to TS that i know i have that arg here, but i don't need it

// Decorators are used for hidden transformations and meta-programming
// Doesn't necessarily affect user, but expose functionality to other programmers

// decorator constructor function
// used widely in Angular
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("SOME LOG STRING")
class Person123 {
  constructor() {
    console.log("have created a person");
  }
}

function ComponentWithH1(elId: string, template: string) {
  return function (constructor: any) {
    const el = document.querySelector(elId);
    const person = new constructor();

    if (el) {
      el.innerHTML = person.name;
      // or use template
    }
  };
}

@ComponentWithH1("div1", "<h1></h1>")
class Person4 {
  name = "Alex";
}

// DECORATOR FACTORIES RUN TOP TO BOTTOM
// DECORATORS ITSELF RUN BOTTOM UP

// --- Decorators inside the class

function Log(target: any, propName: string | Symbol) {
  // property decorator

  console.log(target, propName);
  // prototype of an object, property name
  // executes on class definition
}

function Log1(
  target: any,
  propName: string | Symbol,
  descriptor: PropertyDescriptor
) {
  // method decorator
  console.log(target, propName, descriptor);
}

function Log2(
  target: any,
  propName: string | Symbol,
  descriptor: PropertyDescriptor
) {
  // accessor decorator
  console.log(target, propName, descriptor);
}

function Log3(target: any, propName: string | Symbol, position: number) {
  // parameter/argument decorators
  console.log(target, propName, position);
}

class PersonH {
  name: string;

  @Log
  private _surname: string;

  constructor(n: string, s: string) {
    this.name = n;
    this._surname = s;
  }

  @Log2
  set setSomeNameMethod(n: string) {
    if (n) {
      this.name = n;
    }
  }

  @Log1
  computeSomeStuff() {
    if (this.name) {
      return this.name.length;
    }
  }

  compareNames(@Log3 n: string) {
    return this.name.length > n.length;
  }
}

// property decorators allow to do some setup work,
// store some meta data, add some extra functionality behind the scenes
// before the object has been instantiated
