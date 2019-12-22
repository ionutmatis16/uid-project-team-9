import {EventEmitter} from "events";

class UserModel extends EventEmitter {
    constructor() {
        super();
        this.state = {
            currentUser: {
                role: "user"
            }
        }
    }

    loginUser = () => {
        this.changeRole("user");
    };

    loginAdmin = () => {
        this.changeRole("admin");
    };

    logout = () => {
        this.changeRole("anonymous");
    };

    changeRole = (newRole) => {
        let newUser = {
            role: newRole
        };

        this.state = {
            ...this.state,
            currentUser: newUser
        };

        this.emit("changeUser", this.state);
        window.location.assign("#/home");
    }
}

const userModel = new UserModel();

export default userModel;