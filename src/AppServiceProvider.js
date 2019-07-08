import {ServiceProvider} from "@fusion.io/framework";
import {View, Validator} from "@fusion.io/framework/Contracts";

export default class AppServiceProvider extends ServiceProvider {

    register() {

    }

    boot() {
        const viewService = this.container.make(View);

        viewService.rendering('foo.welcome', (view) => {
            view.with('date', new Date());
        })

        viewService.rendering('partials.user', (view) => {
            console.log('render user view');
        })


        const validatorRegistry = this.container.make(Validator);

        validatorRegistry.register('minlength', async (value, minlength) => {
            return value.length >= minlength;
        })
    }
}
