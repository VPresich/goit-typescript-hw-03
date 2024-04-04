console.log("Test - 1---------------");
import { Student } from "./1";

const student = new Student("Bob", 24, "magister");
student.age = 25;
console.log("Type of student: ", typeof student, ", student: ", student);

console.log("Test - 2---------------");
import { Employee, Manager } from "./2";

const employee = new Employee("Bob", "HR", 30000);
const manager = new Manager("Tom", "Dev", 30000);

console.log(employee.name, manager.name);
console.log(employee.getEmployeeDetails(), manager.getEmployeeDetails());
console.log("Type of employee: ", typeof employee, ", employee: ", employee);
console.log("Type of manager: ", typeof manager, ", employee: ", manager);

console.log("Test - 3---------------");
import { Wizard } from "./3";
const wizard = new Wizard("Merlin", 15);
console.log("Type of wizard: ", typeof wizard, ", employee: ", wizard);
wizard.introduce("I am the mighty wizard");
wizard.castSpell();
wizard.levelUp(); // Level up! New level is 16

console.log("Test - 4---------------");
import { Key, MyHouse, Person } from "./4";
const keyHome = new Key();
console.log("keyHome: ", keyHome.getSignature());

const keyOther = new Key();
console.log("keyOther: ", keyOther.getSignature());

const myHouse = new MyHouse(keyHome);

const mark = new Person(keyHome, "Mark");
const mary = new Person(keyHome, "Mary");
const bob = new Person(keyOther, "Bob");

myHouse.openDoor(mark.getKey());
myHouse.comeIn(mark);

myHouse.openDoor(bob.getKey());
myHouse.comeIn(bob);

myHouse.openDoor(mary.getKey());
myHouse.comeIn(mary);

myHouse.comeIn(bob);

myHouse.getAllTenants();
