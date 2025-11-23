"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Decorator combination in TypeScript');
function Component(options) {
    return (constracutor) => {
        console.log('Component decorator called');
        constracutor.prototype.options = options;
        constracutor.prototype.uniqueId = Date.now();
        constracutor.prototype.insertInDom = () => {
            console.log('Inserting the component in the DOM');
        };
    };
}
function Pipe(constractor) {
    console.log("Pipe decorator called");
    constractor.prototype.pipe = true;
}
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Pipe,
    Component({ selector: "#profile-img" })
], ProfileComponent);
new ProfileComponent();
//# sourceMappingURL=index.js.map