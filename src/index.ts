console.log('Union in type script')

function kgToLbs (weight: number | string): number {
    // narrowing
    if(typeof weight  === 'string'){
        // return Number(weight ) * 2.2
        return parseInt(weight) * 2.2
    }
    return weight * 2.2;

}
console.log(kgToLbs(10))
console.log(kgToLbs("200"))

