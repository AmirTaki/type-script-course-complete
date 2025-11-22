console.log('Generic Class  in TypeScript')


class KeyValuePair <K, V>{
    
    // constructor(public key: number, public value: string){}

    constructor(public key: K, public value: V){}
}

let pair = new KeyValuePair<number, string>(1, 'microsoft')

let pair2 = new KeyValuePair<string, string>("A", "google")

let pair3 = new KeyValuePair ('B', true)


console.log(pair)
console.log(pair2)
console.log(pair3)
