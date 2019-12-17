import React, {Component} from 'react';
import HomePage from "../dumb/Homepage";
import userModel from "../../model/userModel";

const mapModelStateToComponentState = (userModel) => ({
    userModelState: userModel.state
});

export default class SmartHomepage extends Component {
    constructor(props) {
        super(props);
        this.state = mapModelStateToComponentState(userModel);

        this.listener = () => this.setState(mapModelStateToComponentState(userModel));
        userModel.addListener("changeUser", this.listener);
    }

    componentWillUnmount() {
        userModel.removeListener("changeUser", this.listener);
    }

    render() {
        return (
            <HomePage userModelState={this.state.userModelState}
                      loginUser={userModel.loginUser}
                      loginAdmin={userModel.loginAdmin}
                      logout={userModel.logout}/>
        );
    }

}