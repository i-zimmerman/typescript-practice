// public private protected - available only in TS

// abstract class , abstract method / property use when want to enforce all inheriting classes to have
// a common property / method
// inheriting class should provide the returned value / implement this method, prop

// abstract classes can't be instantiated themselves

// singleton pattern ensures that only one instance of the certain class is created

abstract class Department {
  // private properties are only accessible from inside the class where they are defined
  // use protected if want to access in every class that extends this. but still remain unaccessible from outside (only inside, like private)
  protected employees: string[] = []; // private property only accessible inside the class

  constructor(public name: string, protected readonly id: number) {
    // shortcut --> pass props directly into constructor without initialization
    // private properties are accessible only withing the class that defined them
    // cannot be accessed from outside or from the child
  }

  static logSomething() {
    console.log("hello world");
  }
  // "this" refers to Department
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  seeEmployees() {
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  private admins: string[] = [];
  private hiddenWord: string = "hidden word";
  private static instance: ITDepartment;

  get hidden() {
    // getter always should return something
    if (!this.hiddenWord) throw new Error("No hidden word found");

    return this.hiddenWord;
  }

  set hidden(value: string) {
    if (!value) throw new Error("Please check the input");
    this.hiddenWord = value;
  }

  private constructor(id: number) {
    super("IT", id);
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ITDepartment(139);

    return this.instance;
  }

  describe() {
    console.log("This is ITDepartment: " + this.id);
  }

  addAdmin(admin: string) {
    this.admins.push(admin);
  }
  showAdmins() {
    console.log(this.admins);
  }
  addEmployee(name: string) {
    if (name === "Alex") return;

    this.employees.push(name);
  }
}

// const accounting = new Department( 12); --> cannot create instance of abstract class

const it = ITDepartment.getInstance();

// accounting.describe();
// accounting.addEmployee("John");
// accounting.seeEmployees();

// const it = new ITDepartment(133);
// it.addEmployee("Alex");
// it.addEmployee("Li");
// it.seeEmployees();
// it.addAdmin("Max");
// it.showAdmins();
// console.log(it.hidden); // getter
// it.hidden = "i am the new hidden word";
// console.log(it.hidden);
