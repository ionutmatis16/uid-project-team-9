import {EventEmitter} from "events";

class UserModel extends EventEmitter {
    constructor() {
        super();
        this.state = {
            currentUser: {
                role: "admin"
            },
            myProjects: [],
            votedProjects: [0],
            favoriteProjects: [1],
        };
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
    };

    addToFavorites = (projectId) => {
        this.addToArray(projectId, "favoriteProjects");
    };

    addToVotedProjects = (projectId) => {
        this.addToArray(projectId, "votedProjects");
    };

    addToArray(projectId, array) {
        let projectArray = this.state[array];

        if (projectArray.includes(projectId)) {
            let elemIndex = projectArray.indexOf(projectId);
            projectArray.splice(elemIndex, 1);
        } else {
            projectArray.push(projectId);
        }

        projectArray = projectArray.sort((a, b) => a - b);

        this.state = {
            ...this.state,
            [array]: projectArray
        };

        console.log(array);
        console.log(projectArray);

        this.emit("changeUser", this.state);
    }
}

const userModel = new UserModel();

export default userModel;