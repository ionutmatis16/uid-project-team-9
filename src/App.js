import React from 'react';
import './App.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import SmartHomepage from "./view/smart/SmartHomepage";
import SmartProjectList from "./view/smart/SmartProjectList";
import SmartProjectDetails from "./view/smart/SmartProjectDetails";
import SmartFAQList from "./view/smart/SmartFAQList";
import SmartFAQAdd from "./view/smart/SmartFAQAdd";
import SmartFeedback from './view/smart/SmartFeedback';

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Switch>
                    <Route exact component={SmartHomepage} path="/"/>
                    <Route exact component={SmartFAQList} path="/faq"/>
                    <Route exact component={SmartFAQAdd} path="/faq/add"/>
                    <Route exact component={SmartProjectList} path="/projects"/>
                    <Route exact component={SmartProjectDetails} path="/projects/:id"/>
                    <Route exact component={SmartFeedback} path="/feedback"/>

                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;
