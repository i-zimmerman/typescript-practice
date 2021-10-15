// intersection types allow us to combine other types

// intersection can be used with any types and simply builds an intersection

// in case of union types - intersection of types they share in common
// in case of object types - the combination
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// combination of 2 above types
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Alex",
  privileges: ["has passwords"],
  startDate: new Date(),
};

// for interfaces

// interface Admin  {
//   name: string;
//   privileges: string[];
// };

// interface Employee  {
//   name: string;
//   startDate: Date;
// };

// interface ElevatedEmployee extends Admin, Employee {}

// const e1: ElevatedEmployee = {
//   name: "Alex",
//   privileges: ["has passwords"],
//   startDate: new Date(),
// };
