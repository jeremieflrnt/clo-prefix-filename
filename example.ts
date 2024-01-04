// Define a simple TypeScript class
class Person {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Create an instance of the Person class
const person = new Person("John", "Doe");

// Call a method on the instance
const fullName = person.getFullName();

class ComplexObject {
  a: {
    b: boolean;
    c: number[];
    d: {
      e: string;
      f: {
        g: string;
      };
    };
  };
  h: any[];

  constructor() {
    this.a = {
      b: true,
      c: [1, 2, 3],
      d: {
        e: "Nested String",
        f: {
          g: "Another Nested String",
        },
      },
    };
    this.h = [{ prop: "value" }, { prop: "another value" }];
  }
}

const myComplexObject = new ComplexObject();

// This will print a summary of the object structure
console.log(myComplexObject);

// This will print the entire object structure with details
console.dir(myComplexObject, { showHidden: false, depth: null, colors: true });
