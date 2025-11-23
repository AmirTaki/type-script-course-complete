console.log('Inheritance in generic classes  in TypeScript')

interface Product {
    name: string, 
    price: number
}
// 1
class Store <T> {
    protected _objects: T[] = [];

    add (obj: T): void{
        this._objects.push(obj)
    };
}

class CompressibleStore <T> extends Store <T> {
    compress() {}
}
 
let store =  new CompressibleStore <Product>()
store;

//  2
class SearchableStore <T extends {name: string}> extends Store <T> {
    find(name: string) : T | undefined {
        return this._objects.find((obj) => obj.name === name);
    } 
}

new SearchableStore <Product>()


// 3
class ProductStore extends Store <Product>{
    filterByCategory(category: string): Product[]{
        category;
        return []
    }
}

new ProductStore()