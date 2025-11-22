console.log('Generic Function  in TypeScript')


// function wrapInArray  (value: number): number[]{
//    return [value] 
// }

function wrapInArray <T> (value: T): T[]{
   return [value] 
}


let numbers = wrapInArray <number>(1)
console.log(numbers)

let strings = wrapInArray <string> ('A')
console.log(strings)

let bool = wrapInArray (true);
console.log(bool)



class ArrayUtils {
    
    wrapInArray <T> (value: T): T[]{
        return [value] 
    }

    static methodInArray <T> (value: T): T[]{
        return [value]
    }
}


let utils = new ArrayUtils()
let utl =  utils.wrapInArray<number>(100)
console.log(utl)

let Generate = ArrayUtils.methodInArray <string>('method static in Class')
console.log(Generate)