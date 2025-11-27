"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log(`Abstraction object oriented  in typeScript`);
console.log("موارد جا مانده از شی گرایی");
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    radius;
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log('render is circle');
    }
}
const circle = new Circle(12, 'red');
circle.render();
//# sourceMappingURL=index.js.map