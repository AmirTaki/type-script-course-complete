"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Union in type script');
function kgToLbs(weight) {
    if (typeof weight === 'string') {
        return parseInt(weight) * 2.2;
    }
    return weight * 2.2;
}
console.log(kgToLbs(10));
console.log(kgToLbs("200"));
//# sourceMappingURL=index.js.map