console.log('optional chain in type script')

type Customer = {
    birthday: Date
}

const getCounstomer = (id  : number):Customer | null | undefined  => {
    return id === 0 ? null : {birthday: new Date()}
}

let customer = getCounstomer(0)

console.log(customer?.birthday?.getFullYear())

let customer1 = getCounstomer(1)
console.log(customer1?.birthday?.getFullYear())

// optional element access operator
const arrayCustomer:number[] = [1, 2, 3, 4]


if(arrayCustomer !== null && arrayCustomer !== undefined) {
    console.log(arrayCustomer[5])
} 

console.log(arrayCustomer?.[5])
console.log(arrayCustomer?.[2])