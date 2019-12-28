import React from 'react';
import './App.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import SmartHomepage from "./view/smart/SmartHomepage";
import SmartProjectList from "./view/smart/SmartProjectList";
import SmartProjectDetails from "./view/smart/SmartProjectDetails";
import SmartFAQList from "./view/smart/SmartFAQList";
import SmartFAQAdd from "./view/smart/SmartFAQAdd";
import SmartProjectProposal from "./view/smart/SmartProjectProposal";
import SmartFeedback from './view/smart/SmartFeedback';
import AccessibilityButton from "./view/dumb/AccessibilityButton";
import SmartProjectApproval from "./view/smart/SmartProjectApproval";
import SmartMyProjects from "./view/smart/SmartMyProjects";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Switch>
                    <Route exact component={SmartHomepage} path="/"/>
                    <Route exact component={SmartFAQList} path="/faq"/>
                    <Route exact component={SmartFAQAdd} path="/faq/add"/>
                    <Route exact component={SmartProjectList} path="/projects"/>
                    <Route exact component={SmartProjectProposal} path="/projects/new"/>
                    <Route exact component={SmartProjectDetails} path="/projects/:id"/>
                    <Route exact component={SmartFeedback} path="/feedback"/>
                    <Route exact component={SmartProjectApproval} path="/project-approval"/>
                    <Route exact component={SmartMyProjects} path="/my-projects"/>

                </Switch>
            </HashRouter>
            <AccessibilityButton />
        </div>
    );
}

export default App;
