console.log('optional chain in type script')

type Customer = {
    birthday: Date
}

const getCounstomer = (id  : number):Customer | null | undefined  => {
    return id === 0 ? null : {birthday: new Date()}
}

let customer = getCounstomer(0)

// if(customer !== null && customer !== undefined){console.log(customer.birthday)}

// chaning oprator (?)     => optionalChainOprator ? optionChainOprator
console.log(customer?.birthday)

let customer1 = getCounstomer(0)
console.log(customer1?.birthday)

