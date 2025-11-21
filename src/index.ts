console.log('type assertion in type script')

let phone  = document.getElementById('phone') as HTMLInputElement;

console.log(phone.value)


let text = <HTMLInputElement> document.getElementById("text");
console.log(text.value)