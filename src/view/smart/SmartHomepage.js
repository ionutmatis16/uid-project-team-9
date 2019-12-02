import React, {Component} from 'react';
import HomePage from "../dumb/Homepage";
import userModel from "../../model/userModel";

export default class SmartHomepage extends Component {
    constructor(props) {
        super(props);
        this.state = userModel.state;
    }

    render() {
        return (
            <HomePage userModelState={this.state}/>
        );
    }

}