import React, { Component } from 'react';
import userModel from "../../model/userModel";
import MyNavbar from "../dumb/navbar/MyNavbar";
import Feedback from '../dumb/Feedback';
const mapModelStateToComponentState = (userModel) => ({
    userModelState: userModel.state
});

export default class SmartFeedback extends Component {
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
            <div>
                <MyNavbar userModelState={this.state.userModelState}
                    loginUser={userModel.loginUser}
                    loginAdmin={userModel.loginAdmin}
                    logout={userModel.logout} />
                <Feedback />
            </div>
        );
    }
}