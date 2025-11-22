"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('override the method definition in TypeScript');
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
class Teacher extends Person {
    get fullName() {
        return "Professor " + super.fullName;
    }
}
Student;
const teacher = new Teacher('amir', 'taki');
console.log(teacher.fullName);
//# sourceMappingURL=index.js.map