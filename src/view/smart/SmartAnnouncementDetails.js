import React, {Component} from 'react';
import MyNavbar from "../dumb/navbar/MyNavbar";
import userModel from "../../model/userModel";
import announcementModel from "../../model/announcementModel";
import AnnouncementDetails from "../dumb/AnnouncementDetails";
import projectModel from "../../model/projectModel";


const mapModelStateToComponentState = (userModel, announcementModel, props) => ({
    userModelState: userModel.state,
    announcement: getAnnouncementById(announcementModel.state.announcements, props.match.params.id)
});

function getAnnouncementById(announcements, id) {
    id = parseInt(id);
    for (let i = 0; i < announcements.length; i++) {
        if (announcements[i].id === id)
            return announcements[i];
    }
}

export default class SmartAnnouncementDetails extends Component{
    constructor(props){
        super(props);

        this.state = mapModelStateToComponentState(userModel, announcementModel, props);
        this.listener = () => this.setState(mapModelStateToComponentState(userModel, projectModel, props));
        userModel.addListener("changeUser", this.listener);

    }

    componentWillUnmount() {
        userModel.removeListener("changeUser", this.listener);
    }

    render(){
        return (
            <div>
                <MyNavbar userModelState={this.state.userModelState}
                          loginUser={userModel.loginUser}
                          loginAdmin={userModel.loginAdmin}
                          logout={userModel.logout}/>
                <AnnouncementDetails userModelState={this.state.userModelState}
                                     announcement={this.state.announcement}/>
            </div>
        );
    }
}