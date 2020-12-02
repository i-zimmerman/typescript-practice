"use strict";
// INTERFACE
// allows to define structure of an object
let user1;
user1 = {
    name: "Alex",
    greet(phrase) {
        console.log(phrase + " " + this.name);
    },
};
class Person {
    constructor(n) {
        // Greetable, Named
        // can have more methods, but should implement all props of the Greetable interface
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        console.log(phrase + this.name);
    }
}
const user2 = new Person("Maria"); // can create with or without a name
const add2nums = (a, b) => a + b;
