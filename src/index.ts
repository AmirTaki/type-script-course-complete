console.log('Inheritance in TypeScript')

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



const student =  new Student (1, 'amir', 'taki')

console.log(student)