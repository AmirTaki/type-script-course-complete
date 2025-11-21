console.log('nullish operator in type script')

// let speed: number | null = null;
let speed: number | null | undefined = 0;

let ride = {
    // speed: speed || 30
    // speed : speed !== null ? speed : 30
    speed : speed ?? 30
}

console.log(ride.speed)

// Nullish coalescing operator (??)