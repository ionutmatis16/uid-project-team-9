import React, {Component} from 'react';
import userModel from "../../model/userModel";
import MyNavbar from "../dumb/navbar/MyNavbar";
import Settings from "../dumb/Settings";

const mapModelStateToComponentState = (userModel) => ({
    userModelState: userModel.state
});

export default class SmartSettings extends Component {
    constructor(props) {
        super(props);
        this.state = mapModelStateToComponentState(userModel);
        this.listener = () =>
            this.setState(mapModelStateToComponentState(userModel));
        userModel.addListener("changedSetting", this.listener);
        userModel.addListener("changedNewVal", this.listener);
        userModel.addListener("changedSet", this.listener);
        userModel.addListener("changedStyle", this.listener);
        userModel.addListener("changedErrorValue", this.listener);
        userModel.addListener("changedImg", this.listener);
}

    componentWillUnmount() {
        userModel.removeListener("changedSetting", this.listener);
        userModel.removeListener("changedNewVal", this.listener);
        userModel.removeListener("changedSet", this.listener);
        userModel.removeListener("changedStyle", this.listener);
        userModel.removeListener("changedErrorValue", this.listener);
        userModel.removeListener("changedImg", this.listener);
    }

    render() {
        return (
            <div>
                <MyNavbar userModelState={this.state.userModelState}
                          loginUser={userModel.loginUser}
                          loginAdmin={userModel.loginAdmin}
                          logout={userModel.logout}/>

                <Settings setStateForProperty={userModel.setStateForProperty}
                          settings={this.state.userModelState.settings}
                          toggleSetting={userModel.toggleSetting}
                          holdNewValue={userModel.holdNewValue}
                          newValue={this.state.userModelState.newValue}
                          newValuePass={this.state.userModelState.newValuePass}
                          userModelState={this.state.userModelState}
                          setStyle={userModel.setStyle}
                          imageSource={this.state.userModelState.imageSource}
                          setImageSource={userModel.setImageSource}/>
            </div>
        );
    }
}