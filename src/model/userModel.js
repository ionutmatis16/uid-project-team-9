import {EventEmitter} from "events";

class UserModel extends EventEmitter {
    constructor() {
        super();
        this.state = {
            currentUser: {
                role: "user"
            },
            myProjects: [3,4,5],
            votedProjects: [0],
            favoriteProjects: [1],
            settings: [
                {
                    id: 0,
                    text: "Username",
                    active: false,
                    value: "Gigel",
                    newValue: "",
                    style: {},
                    error: false,
                    errorMsg: "Username must not be empty and must be unique."
                },
                {
                    id: 1,
                    text: "Password",
                    active: false,
                    value: "12345",
                    newValue: "",
                    newValuePass: "",
                    style: {},
                    error: false,
                    errorMsg: "Password must not be empty and must match."
                },
                {
                    id: 2,
                    text: "Address",
                    active: false,
                    value: "Observatorului 34",
                    newValue: "",
                    error: false,
                    style: {}
                },
                {
                    id: 3,
                    text: "Interests",
                    active: false,
                    value: "Cars,Energy,Ecology",
                    newValue: "",
                    error: false,
                    style: {}
                },
                {
                    id: 4,
                    text: "Email",
                    active: false,
                    value: "gigel@yahoo.com",
                    newValue: "",
                    style: {},
                    error: false,
                    errorMsg: "Mail not of right format."
                },
                {
                    id: 5,
                    text: "Phone",
                    active: false,
                    value: "0712345678",
                    newValue: "",
                    style: {},
                    error: false,
                    errorMsg: "Phone not of right format."
                }
            ],
            newValue: "",
            newValuePass: "",
            imageSource: ""
        };
    }

    setImageSource = (imageSource) => {
        this.state = {
            ...this.state,
            imageSource: URL.createObjectURL(imageSource)
        }
        this.emit("changedImg", this.state);
    }

    setStyle = (event, id, style, errValue) =>{
        event.stopPropagation();
        this.state.settings[id].style = style;
        this.state.settings[id].error = errValue;

        this.emit("changedStyle", this.state);
    }

    toggleSetting = (settingId) => {
        let isActive = this.state.settings[settingId].active;
        isActive = !isActive;
        this.state.settings[settingId].active = isActive;

        this.emit("changedSetting", this.state);
    };

    /*holdNewValueID = (newVal,field,id) => {
        this.state.settings[id]={
            ...this.state.settings[id],
            [field]: newVal
        };
        this.emit("changedNewVal", this.state);
    };*/

    holdNewValue = (newVal,field) => {
        this.state = {
            ...this.state,
            [field]: newVal
        };

        this.emit("changedNewVal", this.state);
    };

    setStateForProperty = (event, settingId, value) => {
        event.stopPropagation();
        this.state.settings[settingId].value = value;

        this.emit("changedSet", this.state);
    };

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
        window.location.assign("#/");
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