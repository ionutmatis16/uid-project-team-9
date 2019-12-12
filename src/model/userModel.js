import {EventEmitter} from "events";

class UserModel extends EventEmitter {
    constructor() {
        super();
        this.state = {
            currentUser: {
                id: -1,
                username: "",
                password: "",
                role: "anonymous"
            }
        }
    }

    changeUserProperty(property, value) {
        this.state = {
            ...this.state,
            currentUser: {
                ...this.state.currentUser,
                [property]: value
            }
        };
        this.emit("changeUser", this.state);
    }

    changeStateProperty(property, value) {
        this.state = {
            ...this.state,
            [property]: value
        };
        this.emit("changeUser", this.state);
    }
}

const userModel = new UserModel();

export default userModel;