"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Static members in TypeScript');
class Ride {
    activeRids = 0;
    static _counter = 0;
    static get counter() {
        return this._counter;
    }
    static set counter(value) {
        this._counter = value;
    }
    start() { this.activeRids++, Ride._counter++; }
    ;
    stop() { this.activeRids--; }
    ;
}
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(ride1.activeRids);
console.log(ride2.activeRids);
console.log("conter:" + Ride.counter);
Ride.counter = 100;
console.log(Ride.counter);
//# sourceMappingURL=index.js.map