"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('optional chain in type script');
const getCounstomer = (id) => {
    return id === 0 ? null : { birthday: new Date() };
};
let customer = getCounstomer(0);
console.log(customer?.birthday?.getFullYear());
let customer1 = getCounstomer(1);
console.log(customer1?.birthday?.getFullYear());
//# sourceMappingURL=index.js.map