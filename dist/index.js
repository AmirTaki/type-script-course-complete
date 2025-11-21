"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Class construction in TypeScript');
class Account {
    id;
    name;
    balance;
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    deposite(amount) {
        if (amount <= 0) {
            throw new Error('Invalid amount');
        }
        this.balance += amount;
    }
}
Account;
//# sourceMappingURL=index.js.map