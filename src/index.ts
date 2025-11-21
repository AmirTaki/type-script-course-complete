console.log('Functions in type script')


function calcutateTax (income: number, taxYear: number = 2022): number  {
    // let x; varibles
    if((taxYear ) < 2020){
        return income * 1.2
    }
    return income * 3.1
}

console.log(calcutateTax(100_000,  ))





const calcutateTax2 = (income: number, taxYear ?: number): number => {
    if(taxYear  || 10 < 2022){
        return income
    }
    return 0
}
console.log(calcutateTax2(1222))