"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Inheritance in generic classes  in TypeScript');
class Store {
    _objects = [];
    add(obj) {
        this._objects.push(obj);
    }
    ;
}
class CompressibleStore extends Store {
    compress() { }
}
let store = new CompressibleStore();
store;
class SearchableStore extends Store {
    find(name) {
        return this._objects.find((obj) => obj.name === name);
    }
}
new SearchableStore();
class ProductStore extends Store {
    filterByCategory(category) {
        category;
        return [];
    }
}
new ProductStore();
//# sourceMappingURL=index.js.map