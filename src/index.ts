console.log('Decorator combination in TypeScript')

type ComponentOptions = {
    selector: string,

}

// decorator factory

function Component (options: ComponentOptions) {

    return  (constracutor: Function) => {
        console.log('Component decorator called')
        constracutor.prototype.options = options;
        constracutor.prototype.uniqueId = Date.now()

        constracutor.prototype.insertInDom = () => {
            console.log('Inserting the component in the DOM')
        }
    }
}


function Pipe (constractor: Function){
    console.log("Pipe decorator called")
    constractor.prototype.pipe = true;
}

@Pipe
@Component({selector : "#profile-img"})
class ProfileComponent {

}
new ProfileComponent();

// Descriptors are implemented with reverse composition.  => f(g(x))