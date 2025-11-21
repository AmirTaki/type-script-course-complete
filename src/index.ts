console.log('intersection in type script')

// let weight: number & string 

type Draggable = {
    drag: () => void
}


type Resizable = {
    resize: () => void
}


type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag : () => {},
    resize : () => {}
}

console.log(textBox)