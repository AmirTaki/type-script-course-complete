console.log('Generic Interface  in TypeScript')

interface Result <T>{
    data : T | null;
    error: string | null
}

interface User {
    username: string;
}

interface Proudct {
    title: string
}

const fetch =  <T> (url: string): Result<T> => {
    url;
    return {data: null, error :null}
}




fetch<boolean>('')

fetch<User>('url')

fetch<Proudct>('url')








// interface Result <T> {
//     // data: User
//     data: T | null,
//     error: string | null
// }


// interface User {
//     username: string;
// }

// interface Product {
//     title: string 
// }

// function fetch <T> (url: string): Result<T> {
//     url;
//     return {data: null, error: null}
// }




// fetch <User>("url")

// fetch <Product>('url')
