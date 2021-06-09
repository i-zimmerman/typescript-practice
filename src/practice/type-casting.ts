// 2 alternatives to cast types to html elements

const userInputElement = document.querySelector("input")!; // assuring that input is not null, we know that!

const userInputElementById = document.getElementById("input_text")!;
// we get HTML generic element, so we can't access value on it
// userInputElementById.value = "hello!"; --> wont work

// -- useful to know only

// const someInput = <HTMLInputElement>document.getElementById('input_text2')!;

// --
const userInputElementById2 = document.getElementById(
  "input_text2"
)! as HTMLInputElement;

userInputElementById2.value = "hello"; // --> will work now

// --
const userInputElementById3 = document.getElementById("input_text3"); // no (!)

if (userInputElementById3) {
  (userInputElement as HTMLInputElement).value = "hello world";
}

// extra flexibility of interface types (index properties)

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  1: "hello", // 1 will be interpreted as string
  name: "World",
};
