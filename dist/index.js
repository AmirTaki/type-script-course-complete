"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('keyof generic  in TypeScript');
class Store {
    _objects = [];
    add(obj) {
        this._objects.push(obj);
    }
    ;
    find(property, value) {
        return this._objects.find(obj => obj[property] == value);
    }
}
let store = new Store();
store.add({ name: 'amir', price: 1 });
console.log(store.find('name', 'amir'));
console.log(store.find('price', 1));
//# sourceMappingURL=index.js.map