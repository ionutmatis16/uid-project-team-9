import React, {Component} from 'react';
import FAQList from "../dumb/FAQList";
import questionModel from "../../model/questionModel";
import userModel from "../../model/userModel";

export default class SmartFAQList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionModelState: questionModel.state,
            userModelState: userModel.state
        };
    }

    render() {
        return (
            <FAQList userModelState={this.state.userModelState}
                     questions={this.state.questionModelState.questions}/>
        )
    }
}