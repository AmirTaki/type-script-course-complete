"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Functions in type script');
function calcutateTax(income, taxYear = 2022) {
    if ((taxYear) < 2020) {
        return income * 1.2;
    }
    return income * 3.1;
}
console.log(calcutateTax(100_000));
const calcutateTax2 = (income, taxYear) => {
    if (taxYear || 10 < 2022) {
        return income;
    }
    return 0;
};
console.log(calcutateTax2(1222));
//# sourceMappingURL=index.js.map