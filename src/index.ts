console.log('Static members in TypeScript')

class Ride {
    activeRids: number = 0;
    private static _counter:number = 0

    
    static get counter () :number {
        return this._counter;
    }

    static set counter(value: number) {
        this._counter = value
    }

    start() {this.activeRids ++, Ride._counter ++};
    stop() {this.activeRids --};

}

let ride1 = new Ride();
ride1.start()

let ride2 = new Ride();
ride2.start()


console.log(ride1.activeRids)
console.log(ride2.activeRids)

console.log("conter:"+ Ride.counter)

Ride.counter = 100;
console.log(Ride.counter)