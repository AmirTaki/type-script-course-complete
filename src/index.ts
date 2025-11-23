console.log(' method decorator in TypeScript')

// Each property in a JavaScript object has an object descriptor that describes it.
// The number and type are important for function descriptors, not the name.

function Log (target: any, methodName: string, desciptor: PropertyDescriptor) {
    const original = desciptor.value as Function;

    desciptor.value  = function (...args: any) {
        console.log("Before")
        original.call(this, ...args)
        console.log('After')
    }

    methodName;
    target;



}


class Person {
    @Log
    say(message: string, id: number)  {
        console.log("Person says " + message + `, id : ${id}`);
    }
}

let person = new Person()
person.say('Hello',1 )