import React, {Component} from 'react';
import userModel from "../../model/userModel";
import announcementsModel from "../../model/announcementModel";
import AnnouncementList from "../dumb/AnnouncementsList";
import MyNavbar from "../dumb/navbar/MyNavbar";

const mapModelStateToComponentState = (userModel, announcementsModel) => ({
    userModelState: userModel.state,
    announcements: announcementsModel.state.announcements
});

export default class SmartAnnouncementspage extends Component {

    constructor(props) {
        super(props);
        this.state = mapModelStateToComponentState(userModel, announcementsModel);

        this.listener = () =>
            this.setState(mapModelStateToComponentState(userModel, announcementsModel));
        userModel.addListener("changeUser", this.listener);
        announcementsModel.addListener("changedAnnouncements", this.listener);
    }

    componentWillUnmount() {
        userModel.removeListener("changeUser", this.listener);
        announcementsModel.removeListener("changedAnnouncements", this.listener);
    }

    render() {
        return (
            <div>
                <MyNavbar userModelState={this.state.userModelState}
                          loginUser={userModel.loginUser}
                          loginAdmin={userModel.loginAdmin}
                          logout={userModel.logout}/>
                <AnnouncementList userModelState={this.state.userModelState}
                                  announcements={this.state.announcements}/>
            </div>
        );
    }
}