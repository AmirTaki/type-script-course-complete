console.log('literal in type script')

let quantity: 50 | 100 = 50

console.log(quantity)
quantity = 100
console.log(quantity)



type Qauntity = 50 | 100

let value:Qauntity =  100
console.log(value)

type Metric = "cm" | "inch"

let size: Metric = 'cm'
console.log(size)