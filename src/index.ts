console.log(' type mapping Generic in TypeScript')

interface Product {
    name: string, 
    price: number
}

// keyof Product => name , price

/// type maping

type ReadOnlyProduct = {
    readonly [k in keyof Product]: Product[k]  
}


let product: ReadOnlyProduct = {
    name : 'amir', price : 1
}


console.log(product)


// generic

type ReadOnly<T>  = {
    readonly [k in keyof T]: T[k]
}


let perons: ReadOnly<Product> = {
    name : 'mani', 
    price : 2
}


console.log(perons)

// optional

type Optional <T> =  {
    [K in keyof T]? : T[K] 
}

let option : Optional <Product> = {
    name : 'sara',
}
console.log(option)


// Nullable

type Nullable<T> = {
    [K in keyof T]?: T[K] | null
}

let nun : Nullable<Product> = {}

console.log(nun)
