console.log('Polymorphism object in TypeScript')

//It is inherited from a class called a parent or super.

//The class it inherits from is called a child, derived, or sub.



// POLYMORPHISM ::: 
// The concept of polymorphism refers to the situation where objects can take on different shapes.

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

class Principal extends Person {
    override get fullName() :string {
        return "Principal " + super.fullName
    }
}


function printNames (people: Person[]): void{
    for(let person of people){
        console.log(person.fullName)
    }
}

Student;

Teacher;

printNames([
    new Student(1, 'amir', 'taki'),
    new Teacher('mani', 'saniz'),
    new Student(2, 'raha', 'porian'),
    new Principal('shayan', 'proina')
])