"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Inheritance in TypeScript');
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
        console.log('taking a test');
    }
}
const student = new Student(1, 'amir', 'taki');
console.log(student);
//# sourceMappingURL=index.js.map