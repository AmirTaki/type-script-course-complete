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

