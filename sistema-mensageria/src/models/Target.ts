import { ITarget } from "../types/target";

class Target implements ITarget {
    email: string;
    name: string;
    phone: string;

    constructor({ email, name, phone }: ITarget) {
        this.email = email
        this.name = name
        this.phone = phone
    }

    get to() {
        return `${this.email} - ${this.name} - ${this.phone}`
    }
}

export { Target }
