console.log('Object in type script')


type Employee = {
    readonly id: number,
    name : string,
    retire: (date : Date) => void
}


let employee: Employee = {
    id : 1, 
    name : 'tilan',
    retire: (date: Date) => {
        console.log(date)
    }
}
console.log(employee)