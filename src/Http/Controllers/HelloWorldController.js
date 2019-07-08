import {get, singleton, middleware} from "@fusion.io/framework";
import User from "../../User";
import LoginForm from "../../LoginForm";

@singleton()
export default class HelloWorldController {

    @get('/')
    async index(context) {
        let loginForm = new LoginForm();
        let loginError = context.errors();

        console.log(loginError);

        await context.render('foo.welcome', {user: new User(context.query.user), loginForm, loginError});
    }

    @middleware(LoginForm)
    @get('/login')
    async login(context) {

        context.body = {
            formData: context.loginform
        }
    }
}
