"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Generic Function  in TypeScript');
function wrapInArray(value) {
    return [value];
}
let numbers = wrapInArray(1);
console.log(numbers);
let strings = wrapInArray('A');
console.log(strings);
let bool = wrapInArray(true);
console.log(bool);
class ArrayUtils {
    wrapInArray(value) {
        return [value];
    }
    static methodInArray(value) {
        return [value];
    }
}
let utils = new ArrayUtils();
let utl = utils.wrapInArray(100);
console.log(utl);
let Generate = ArrayUtils.methodInArray('method static in Class');
console.log(Generate);
//# sourceMappingURL=index.js.map