console.log('accessor decorator in TypeScript')

function Capitalize (target: any, methodName: string , descriptor: PropertyDescriptor ) {
    const orginal = descriptor.get;

    descriptor.get = function() {
        const result =  orginal?.call(this);
        return typeof result === 'string' ? result.toUpperCase() : result
    }

    methodName;
    target;
}   



class Person {
    constructor(public firstName: string, public lastName: string) {
        
    }
    @Capitalize
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const person =  new Person("amir", 'taki')

console.log(person.fullName)

