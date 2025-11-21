"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Object creation in TypeScript');
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
const account = new Account(1, 'amir', 0);
console.log(account);
console.log(account.name);
account.deposite(100);
console.log(account.balance);
console.log(typeof account);
console.log(account instanceof Account);
//# sourceMappingURL=index.js.map