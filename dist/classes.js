"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    // "this" refers to Department
    describe() {
        console.log("Department: " + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    seeEmployees() {
        console.log(this.employees);
    }
}
const accounting = new Department("Accounting");
// accounting.describe();
const dummy = { describe: accounting.describe, name: "DUMMY" };
// dummy.describe();
accounting.addEmployee("John");
accounting.seeEmployees();
