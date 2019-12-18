import React, {Component} from 'react';
import questionModel from "../../model/questionModel";
import userModel from "../../model/userModel";
import MyNavbar from "../dumb/navbar/MyNavbar";
import FAQAdd from "../dumb/FAQAdd";

const mapModelStateToComponentState = (userModel, questionModel) => ({
    userModelState: userModel.state,
    questionModelState: questionModel.state
});

export default class SmartFAQAdd extends Component {
    constructor(props) {
        super(props);
        this.state = mapModelStateToComponentState(userModel, questionModel);
        this.listener = () =>
            this.setState(mapModelStateToComponentState(userModel, questionModel));
        questionModel.addListener("changedQuestion", this.listener);
    }

    componentWillUnmount() {
        questionModel.removeListener("changedQuestion", this.listener);
    }

    render() {
        return (
            <div>
                <MyNavbar userModelState={this.state.userModelState}
                          loginUser={userModel.loginUser}
                          loginAdmin={userModel.loginAdmin}
                          logout={userModel.logout}/>

                <FAQAdd newQuestion={this.state.questionModelState.newQuestion}
                        onChangeNewQuestion={questionModel.onChangeNewQuestion}
                        onSubmitNewQuestion={questionModel.onSubmitNewQuestion}/>
            </div>
        );
    }
}