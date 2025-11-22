"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Property parameter Modifier in TypeScript');
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