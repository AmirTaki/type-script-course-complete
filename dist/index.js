"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Access Control Modifier  in TypeScript');
class Account {
    id;
    name;
    nickname;
    _balance;
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    deposite(amount) {
        if (amount <= 0) {
            throw new Error('Invalid amount');
        }
        this.calculateTax();
        this._balance += amount;
    }
    getBalace() {
        return this._balance;
    }
    calculateTax() {
    }
}
const account = new Account(1, 'amir', 100);
account;
console.log(account.getBalace());
//# sourceMappingURL=index.js.map