"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Apply restrictions  in TypeScript');
function echo(value) {
    return value;
}
echo(1);
echo("1");
function echo2(value) {
    return value;
}
echo2({ name: 'amir' });
function echo3(value) {
    return value;
}
echo3({ name: "mani" });
class People {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Customer extends People {
}
const echo4 = (value) => {
    return value;
};
echo4(new People('amir'));
echo4(new Customer('mani'));
//# sourceMappingURL=index.js.map