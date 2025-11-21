"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Functions in type script');
function calcutateTax(income) {
    if (income < 50_000) {
        return income * 1.2;
    }
    return income * 3.1;
}
console.log(calcutateTax(100_000));
const calcutateTax2 = (income) => {
    console.log(income);
    return 0;
};
//# sourceMappingURL=index.js.map