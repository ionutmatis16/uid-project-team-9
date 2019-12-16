import React, {Component} from 'react';
import FAQList from "../dumb/FAQList";
import questionModel from "../../model/questionModel";
import userModel from "../../model/userModel";

const mapModelStateToComponentState = (userModel, questionModel) => ({
    userModelState: userModel.state,
    questionModelState: questionModel.state
});

export default class SmartFAQList extends Component {
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
            <FAQList userModelState={this.state.userModelState}
                     questions={this.state.questionModelState.questions}
                     toggleQuestion={questionModel.toggleQuestion}/>
        )
    }
}