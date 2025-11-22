console.log('Access Control Modifier  in TypeScript')

// 3 access modifier
// 1- public 
// 2- private
// 3- protected


class Account {
    readonly id: number ;
    name: string;
    nickname?: string;
    private _balance: number;
    
    // property
    constructor(id: number, name: string, balance: number){
        this.id = id;
        this.name = name;
        this._balance = balance
    }
    // method 
    deposite(amount: number): void {
        if(amount <= 0)
        {
            throw new Error('Invalid amount')
        }
        this.calculateTax()
        this._balance += amount;
    }

    getBalace (): number {
        return this._balance;
    }


    private calculateTax () {

    }
}

const account =  new Account(1, 'amir', 100);

// account.balance  private  access modifier
account
console.log(account.getBalace())

