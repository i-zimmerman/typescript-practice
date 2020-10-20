"use strict";
let userInput; // don't know type yet
let userName;
userInput = 5;
userInput = "Hello";
// need extra check with unknown
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    // never returns anything
    throw { message: message, errorCode: code };
}
generateError("Error occurred", 500);
