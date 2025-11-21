"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Nullable in type script');
function greet(name) {
    if (typeof (name) === "string") {
        console.log(name.toUpperCase());
    }
    else
        console.log('invalid argument');
}
greet('helloword');
greet(null);
greet(undefined);
//# sourceMappingURL=index.js.map