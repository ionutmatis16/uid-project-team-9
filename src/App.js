import React from 'react';
import './App.css';
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import SmartHomepage from "./view/smart/SmartHomepage";
import SmartAboutpage from "./view/smart/SmartAboutpage";

function App() {
  return (
    <div className="App">
        <HashRouter>
            <Switch>
                <Route exact component={SmartHomepage} path="/home"/>
                <Route exact component={SmartAboutpage} path="/about"/>

            </Switch>
            <Redirect to='/home'/>
        </HashRouter>
    </div>
  );
}

export default App;
