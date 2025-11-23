"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('parameter decorator in type script');
const watchedParameters = [];
function Watch(target, methodName, parmeterIndex) {
    watchedParameters.push({
        methodName,
        parmeterIndex
    });
    target;
}
class vehicle {
    move(speed) { speed; }
}
__decorate([
    __param(0, Watch)
], vehicle.prototype, "move", null);
new vehicle();
console.log(watchedParameters);
//# sourceMappingURL=index.js.map