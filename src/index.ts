console.log('override the method definition in TypeScript')

//It is inherited from a class called a parent or super.

//The class it inherits from is called a child, derived, or sub.


class Person {
    constructor(
        public fistName:string,
        public lastName:string 
    ){}

    walk(){
        console.log('Walking')
    }

    get fullName (): string {
        return this.fistName + " " + this.lastName;
    }

}

class Student extends Person {
    constructor(
            public studentId: number, 
            firstName: string,  // // not access no modifre becuse Inhertance
            lastName: string   // not access no modifre becuse Inhertance
    ){
        super(firstName, lastName)
    }

    takeTest() {
        console.log('taking a test')
    }
}

class Teacher extends Person {
    override get fullName(): string {
        // return "Professor " + this.fistName +" "  +this.lastName
        return "Professor " + super.fullName
    }
}


Student;

const teacher = new Teacher('amir', 'taki')
console.log(teacher.fullName)