"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log(' method decorator in TypeScript');
function Log(target, methodName, desciptor) {
    const original = desciptor.value;
    desciptor.value = function (...args) {
        console.log("Before");
        original.call(this, ...args);
        console.log('After');
    };
    methodName;
    target;
}
class Person {
    say(message, id) {
        console.log("Person says " + message + `, id : ${id}`);
    }
}
__decorate([
    Log
], Person.prototype, "say", null);
let person = new Person();
person.say('Hello', 1);
//# sourceMappingURL=index.js.map