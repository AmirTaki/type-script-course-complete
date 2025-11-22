console.log('Modifier in TypeScript')

class Account {
    readonly id: number ;
    name: string;
    nickname?: string;
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

console.log(account instanceof Account)

account.nickname = 'alpha'

console.log(account)