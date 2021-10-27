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

// can actually change the constructor of a class, props and methods
function WithTemplate2(elId: string, template: string) {
  console.log("TEMPLATE DECORATOR");
  return function <T extends { new (...args: any[]): { name: string } }>(
    ogConstructor: T
  ) {
    return class extends ogConstructor {
      constructor(..._: any[]) {
        super();
        console.log("RENDERING TEMPLATE");
        const el = document.querySelector(elId);

        if (el) {
          el.innerHTML = this.name;
          // or use template
        }
      }
    };
  };
}

@WithTemplate2("div1", "<h1></h1>")
class SomePerson {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

// when called on props and methods
// can change property descriptors of properties returning an object
// example

function Autobind(_: any, _2: string | Symbol, descriptor: PropertyDescriptor) {
  const ogMethod = descriptor.value;

  const adjDescriptor: PropertyDescriptor = {
    configurable: false,
    enumerable: false,
    get() {
      const boundFc = ogMethod.bind(this);
      return boundFc;
    },
  };

  return adjDescriptor;
}

class Printer {
  message = "this works!";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

// decorators for validations
interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; //required, positive...
  };
}

const registeredValidators: ValidatorConfig = {};

function validate(obj: any) {
  const objValidatorsConfig = registeredValidators[obj.constructor.name];

  if (!objValidatorsConfig) return true;

  let isValid = true;
  for (const prop in objValidatorsConfig) {
    for (const validator of objValidatorsConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
        case "positive":
          isValid = isValid && obj[prop] > 0;
      }
    }

    return isValid;
  }
}

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["required"],
  };
}

function PosNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["positive"],
  };
}

class Course {
  @Required
  title: string;
  @PosNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const course = new Course("title", 130);
const emptyCourse = new Course("", 0);

if (!validate(course)) {
  // do something
}

if (!validate(emptyCourse)) {
  // do something
}
