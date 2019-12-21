import React from 'react';
import './App.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import SmartHomepage from "./view/smart/SmartHomepage";
import SmartProjectList from "./view/smart/SmartProjectList";
import SmartProjectDetails from "./view/smart/SmartProjectDetails";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Switch>
                    <Route exact component={SmartHomepage} path="/home"/>
                    <Route exact component={SmartProjectList} path="/projects"/>
                    <Route exact component={SmartProjectDetails} path="/projects/:id"/>

                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;
