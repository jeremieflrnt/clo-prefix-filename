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
console.log("👀 [example.ts:21]: fullName", fullName);
