console.log('Getter & Setter Modifier in TypeScript')

class Account {
    nickname?: string;    
    // property
    constructor(
        public readonly id: number, 
        public name: string, 
        private _balance: number, 
    ){}
    // method 
    deposite(amount: number): void {
        if(amount <= 0)
            {
                throw new Error('Invalid amount')
            }
            this.calculateTax()
            this._balance += amount;
        }
        
    // getter
    get balance (): number {
        return this._balance;
    }
    
    // setter
    set balance (value: number) {
        if(value < 0)
            throw new Error ('Invalid value')
        this._balance = value
    }

    private calculateTax () {
        
    }
}

const account =  new Account(1, 'amir', 100);

console.log(account)
account.balance = 200;
console.log(account.balance)


// 3 access modifier
// 1- public 
// 2- private
// 3- protected

