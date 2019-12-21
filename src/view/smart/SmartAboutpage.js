import React, {Component} from 'react';
import userModel from "../../model/userModel";
import MyNavbar from "../dumb/navbar/MyNavbar";
import SmartAboutTabs from "./SmartAboutTabs";



const mapModelStateToComponentState = (userModel) => ({
    userModelState: userModel.state
});

export default class SmartAboutpage extends Component{
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
                          logout={userModel.logout}/>
                <div align="center"><h1>About</h1></div>
                <SmartAboutTabs/>
            </div>
        );
    }
}