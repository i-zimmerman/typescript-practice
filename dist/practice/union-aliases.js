"use strict";
function combine(input1, 
// union types - tell ts to use multiple types - number | string;
input2, conversionType // literal types - specific version of types
) {
    let result;
    if (conversionType === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedAges = combine(30, 26, "as-string");
console.log(combinedAges);
const combinedStringAges = combine("30", "25", "as-number");
console.log(combinedStringAges);
const combinedNames = combine("Max", "Sara", "as-number");
console.log(combinedNames);
