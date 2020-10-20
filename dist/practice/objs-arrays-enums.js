"use strict";
// object types -  key/type pairs
// tuples - fixed length arrays [1,2]
// enum - custom type to create human readable identifiers (Map under the hood)
// any - any type of data, any[], avoid when possible
const person1 = {
    name: "Alex",
    age: 25,
    hobbies: ["skating", "cooking"],
    role: [2, "author"],
};
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role["READ_ONLY"] = "READ";
    Role[Role["AUTHOR"] = 8] = "AUTHOR";
})(Role || (Role = {}));
const person2 = {
    name: "Alex",
    age: 25,
    hobbies: ["skating", "cooking"],
    role: Role.ADMIN,
};
let favoriteActivities;
favoriteActivities = ["Sports"];
for (const hobby of person1.hobbies) {
    console.log(hobby.toUpperCase());
}
console.log(person1.role);
