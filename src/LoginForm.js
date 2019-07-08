import {Form, form, renderable, bind} from "@fusion.io/framework";

@bind()
@renderable('partials.loginform')
@form({
    username: 'required|email',
    password: 'required|minlength:6'
})
export default class LoginForm extends Form {


    async handle(context, next) {
        this.assign(context.query);

        const result = await this.validate();

        if (result.valid()) {
            context.loginform = this.value();
            return await next();
        }

        context.withError(result).redirect('/');
    }
}
