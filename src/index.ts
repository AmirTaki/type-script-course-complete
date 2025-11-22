console.log('protected Modifire in TypeScript')

// access modifire 
/*
1- public 
2- private
3- protected


Private members cannot be inherited, but protected members can be inherited.
A protected member is accessible from within the class and inheritance, but not outside the class.

important:
We use protected members when we need them.
*/

class Person {
    constructor(
        public fistName:string,
        public lastName:string 
    ){}

    protected walk(){
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
        this.walk()
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