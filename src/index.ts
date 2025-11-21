console.log('type unknown in type script')

// function render(document: any) {
//     document.anythin()
// }


function render2(document: unknown){
    if(typeof document === 'string'){
        document.concat('ir')
    }
}
console.log(render2('am'))

// inmportant

// if(document instanceof WordDocumnet)