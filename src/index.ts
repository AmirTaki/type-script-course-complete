import { Circle, Square } from "./exportModule/shape"

console.log('import & export in type script')


const circle =  new  Circle(1)
const square =  new Square (2)

console.log(circle, square)