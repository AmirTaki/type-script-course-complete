console.log('Nullable in type script')

function greet (name: string | null | undefined ){
    if(typeof(name) === "string" ){
        console.log(name.toUpperCase())
    }
    else 
        console.log('invalid argument')
}

greet('helloword')
greet(null)
greet(undefined)




