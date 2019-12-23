import React, {Component} from 'react';
import { Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';
import "../../style/aboutpage.css";
import AboutTabs from "../dumb/AboutTabs";


export default class SmartAboutTabs  extends Component {

    constructor(props){
        super(props);
        this.state = {activeTab:'1', imageSource:'/images/logIn.png'};

    }

    toggle(tab) {
        if (this.state.activeTab !== tab) this.setState({activeTab:tab});
    }

    changeImageSource = (src) =>{
       this.setState({imageSource:src});
    }

    render() {
        return(
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({active: this.state.activeTab === '1'})}
                        onClick={() => {
                            this.toggle('1');
                        }}
                    >
                        Participative budgeting
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({active: this.state.activeTab === '2'})}
                        onClick={() => {
                            this.toggle('2');
                        }}
                    >
                        Motivation
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink
                        className={classnames({active: this.state.activeTab === '3'})}
                        onClick={() => {
                            this.toggle('3');
                        }}
                    >
                        Proposing a project
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({active: this.state.activeTab === '4'})}
                        onClick={() => {
                            this.toggle('4');
                        }}
                    >
                        Vote a project
                    </NavLink>
                </NavItem>
            </Nav>
            <AboutTabs activeTab={this.state.activeTab} imageSource={this.state.imageSource} changeImgSource={this.changeImageSource}/>

        </div>
        );
    }
}
