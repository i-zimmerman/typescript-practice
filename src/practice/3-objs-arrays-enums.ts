// object types -  key/type pairs
// tuples - fixed length arrays [1,2]
// enum - custom type to create human readable identifiers (Map under the hood)
// any - any type of data, any[], avoid when possible

const person1: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Alex",
  age: 25,
  hobbies: ["skating", "cooking"],
  role: [2, "author"],
};

enum Role {
  ADMIN = 5,
  READ_ONLY = "READ", // 6
  AUTHOR = 8, // 7
}

const person2 = {
  name: "Alex",
  age: 25,
  hobbies: ["skating", "cooking"],
  role: Role.ADMIN,
};

const tuple: [string, number] = ["2", 2];

// tuple.push({});
// push works with tuples, cause it is at runtime
// but still TS will inference that array can hold only spec types
// console.log(tuple);

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

for (const hobby of person1.hobbies) {
  console.log(hobby.toUpperCase());
}

console.log(person1.role);
