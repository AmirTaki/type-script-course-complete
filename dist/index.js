"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Generic Class  in TypeScript');
class KeyValuePair {
    key;
    value;
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair(1, 'microsoft');
let pair2 = new KeyValuePair("A", "google");
let pair3 = new KeyValuePair('B', true);
console.log(pair);
console.log(pair2);
console.log(pair3);
//# sourceMappingURL=index.js.map