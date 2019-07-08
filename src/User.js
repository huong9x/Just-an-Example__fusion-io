import {renderable} from "@fusion.io/framework";

@renderable('partials.user')
export default class User {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}