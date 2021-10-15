type StrOrNum = string | number;

type StrOrBool = string | boolean;

type Universal = StrOrNum & StrOrBool;

// overloading function
function add1(a: number, b: number): number;
function add1(a: string, b: string): string;
function add1(a: StrOrNum, b: StrOrNum) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

const result = add1("s", "es");
