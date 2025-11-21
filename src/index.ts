console.log('Class construction in TypeScript')


// An object is a product of a class.

// In object-oriented programming, we have a concept called class, which allows us to create as many objects as we want using a class.

class Account {
    id: number ;
    name: string;
    balance: number;

    // property
    constructor(id: number, name: string, balance: number){
        this.id = id;
        this.name = name;
        this.balance = balance
    }
    // method 
    deposite(amount: number): void {
        if(amount <= 0)
        {
            throw new Error('Invalid amount')
        }
       
        this.balance += amount;
    }
}

Account


// object === instance