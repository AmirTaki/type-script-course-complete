console.log('property decorator in type script')

function MinLength (lenght: number){
    return (target: any, propertyName: string ) => {
    
        let value: string;
        const descriptor: PropertyDescriptor = {
            get () {return value},
            set(newValue: string) {
                if (newValue.length < lenght)
                    throw new Error (`${propertyName}  should be at least ${lenght} characters long`)
                value = newValue;
            }
        }
        Object.defineProperty(target, propertyName, descriptor)
    }
}


class User {
    @MinLength(4)
    password: string;

    constructor(password: string){
        this.password = password
    }
}

let uesr = new User('123456')
console.log(uesr.password)
