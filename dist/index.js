"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('protected Modifire in TypeScript');
class Person {
    fistName;
    lastName;
    constructor(fistName, lastName) {
        this.fistName = fistName;
        this.lastName = lastName;
    }
    walk() {
        console.log('Walking');
    }
    get fullName() {
        return this.fistName + " " + this.lastName;
    }
}
class Student extends Person {
    studentId;
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        this.walk();
        console.log('taking a test');
    }
}
class Teacher extends Person {
    get fullName() {
        return "Professor " + super.fullName;
    }
}
class Principal extends Person {
    get fullName() {
        return "Principal " + super.fullName;
    }
}
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
Student;
Teacher;
printNames([
    new Student(1, 'amir', 'taki'),
    new Teacher('mani', 'saniz'),
    new Student(2, 'raha', 'porian'),
    new Principal('shayan', 'proina')
]);
//# sourceMappingURL=index.js.map