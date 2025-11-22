"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Getter & Setter Modifier in TypeScript');
class Account {
    id;
    name;
    _balance;
    nickname;
    constructor(id, name, _balance) {
        this.id = id;
        this.name = name;
        this._balance = _balance;
    }
    deposite(amount) {
        if (amount <= 0) {
            throw new Error('Invalid amount');
        }
        this.calculateTax();
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0)
            throw new Error('Invalid value');
        this._balance = value;
    }
    calculateTax() {
    }
}
const account = new Account(1, 'amir', 100);
console.log(account);
account.balance = 200;
console.log(account.balance);
//# sourceMappingURL=index.js.map