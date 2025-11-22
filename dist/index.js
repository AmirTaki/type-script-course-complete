"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Abstraction in TypeScript');
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
        console.log('Rendering a circle ...');
    }
}
let circle = new Circle(2, 'gray');
circle.render();
//# sourceMappingURL=index.js.map