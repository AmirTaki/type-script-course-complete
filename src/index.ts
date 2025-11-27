console.log(`Abstraction object oriented  in typeScript`)
console.log("موارد جا مانده از شی گرایی")


abstract class Shape {
    constructor(public color: string){}

    abstract render ():void
}

class Circle extends Shape {
    constructor(public  radius:number, color: string){
        super(color)
    }
    override render(): void {
        console.log('render is circle')
    }
}

// const shape =  new Shape('blue')
// shape.render()

const circle = new Circle(12, 'red')
circle.render()