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
const arrayCustomer = [1, 2, 3, 4];
if (arrayCustomer !== null && arrayCustomer !== undefined) {
    console.log(arrayCustomer[5]);
}
console.log(arrayCustomer?.[5]);
console.log(arrayCustomer?.[2]);
//# sourceMappingURL=index.js.map