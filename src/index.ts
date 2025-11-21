console.log('Functions in type script')


function calcutateTax (income: number): number  {
    if(income < 50_000){
        return income * 1.2
    }
    return income * 3.1
}

console.log(calcutateTax(100_000))

const calcutateTax2 = (income: number): number => {
    console.log(income)
    return 0
}