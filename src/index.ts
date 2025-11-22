console.log('Dynamic property in TypeScript')

// let person = {};
// person.name = "amir"


class SetAssignment {
    // constructor(){}
    [seatNumber: string]: string;  // index signature property
  
}

let setas = new SetAssignment()

setas.A1 = "Amir";
setas.A2 = "Mani"
setas['A3'] = 'hana'
// setas.A4 = 2 


console.log(setas)
console.log(setas.A1)
console.log(setas?.["A2"])
console.log(setas.A3)

// a1, a2, ...