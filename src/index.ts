console.log('class decorator in TypeScript')
 
//  Prototype:  Every object in JavaScript has a prototype from which it inherits its properties and methods.
function Component (constructor: Function):  void{
    console.log('Component decorator called');
    constructor.prototype.uniqueId = Date.now()

    constructor.prototype.insertInDom = () => {
        console .log('Inserting the component in the DOM')
    }

}

@Component
class ProfileComponent {

}
new ProfileComponent();


// Whether we have created an instance or not, the destructor is called.

// The declarator that we apply to a class is actually a function that our class calls as a declarator.