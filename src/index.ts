console.log(`Interface object oriented  in typeScript`)
console.log("موارد جا مانده از شی گرایی")

// abstract class CalendarClass {
//     constructor(public name: string){}    

//     abstract addEvent(): void
//     abstract removeEvent(): void
// }

// CalendarClass

// interface

interface Calendar{
    name: string,

    addEvent(): void;
    removeEvent():void;
}

interface Clude extends Calendar{
    synce(): void;
}


class Google implements Calendar {
    constructor(public name: string){}
    addEvent(): void {
        
    }
    removeEvent(): void {
        
    }
}

class GoogleClude implements Clude{
    constructor(public name: string) {}

    addEvent(): void {
        
    }
    removeEvent(): void {
        
    }
    synce(): void {
        
    }
}

const google = new Google('google')
console.log(google)

const googleClude = new GoogleClude ('googleClude')
console.log(googleClude)
