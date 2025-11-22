"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Dynamic property in TypeScript');
class SetAssignment {
}
let setas = new SetAssignment();
setas.A1 = "Amir";
setas.A2 = "Mani";
setas['A3'] = 'hana';
console.log(setas);
console.log(setas.A1);
console.log(setas?.["A2"]);
console.log(setas.A3);
//# sourceMappingURL=index.js.map