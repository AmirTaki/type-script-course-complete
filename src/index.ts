console.log('Object creation in TypeScript')

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

const account =  new Account(1, 'amir', 0);

console.log(account)

console.log(account.name)

account.deposite(100)

console.log(account.balance)

console.log(typeof account)

console.log(account instanceof Account)