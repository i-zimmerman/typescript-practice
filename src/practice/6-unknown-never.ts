let userInput: unknown; // don't know type yet
let userName: string;

userInput = 5;
userInput = "Hello";
// need extra check with unknown
if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  // never returns anything
  throw { message: message, errorCode: code };
}

generateError("Error occurred", 500);
