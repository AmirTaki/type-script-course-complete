console.log('Passing parameters to decorator in TypeScript')

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

@Component({selector : "#profile-img"})
class ProfileComponent {

}
new ProfileComponent();

