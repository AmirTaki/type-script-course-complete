console.log('Object in type script')



let employee: {
    readonly id : number,
    name?: string,  
    retire : (date: Date) => void


} = {
    id: 1,
    // name : ''
    retire : (Date: Date) => {
        console.log(Date)
    }
}

employee.name = "amir"
// employee.id = 2   readonly
console.log(employee)