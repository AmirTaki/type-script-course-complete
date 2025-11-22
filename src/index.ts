console.log('Apply restrictions  in TypeScript')


// const echo = <T>(value: T):T => {
//     return value
// }



// extends 
function echo<T extends number | string> (value: T): T {
    return value;
}

echo<number>(1)
echo<string>("1")
// echo<boolean>(true)


//  extend in object
function echo2 <T extends {name: string}> (value: T): T{
    return value;
}

echo2({name: 'amir'})


// extend in interface
interface Person{
    name: string
}

function echo3 <T extends Person> (value: T): T{
    return value;
}

echo3({name: "mani"})


// extend in class
class People {
    constructor (public name : string){}
}


class Customer extends People{}

const echo4 = <T extends People> (value: T): T => {
    return value
}

echo4(new People('amir'))

echo4(new Customer('mani'))