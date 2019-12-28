import React, {Component} from 'react';
import MyNavbar from "../dumb/navbar/MyNavbar";
import userModel from "../../model/userModel";
import announcementModel from "../../model/announcementModel";
import AddAnnouncement from "../dumb/AddAnnouncement";


const mapModelStateToComponentState = (userModel, announcementModel) => ({
    userModelState: userModel.state,
    announcements: announcementModel.state.announcements
});

export default class SmartAddAnnouncement extends Component {
    constructor(props){
        super(props);

        this.state = mapModelStateToComponentState(userModel, announcementModel);
        this.listener = () => this.setState(mapModelStateToComponentState(userModel));
        userModel.addListener("changeUser", this.listener);

    }

    componentWillUnmount() {
        userModel.removeListener("changeUser", this.listener);
    }

    render(){
        return(
            <div>
                <MyNavbar userModelState={this.state.userModelState}
                          loginUser={userModel.loginUser}
                          loginAdmin={userModel.loginAdmin}
                          logout={userModel.logout}/>
                <AddAnnouncement userModelState={this.state.userModelState}
                                announcementModel={announcementModel}/>
            </div>
        );
    }
}