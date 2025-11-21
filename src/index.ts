console.log('optional chain in type script')

// optional call operator

let log: any = (message: string) => {
    console.log(message)
} 

log('message')

let loge: any = null

loge?.('a')