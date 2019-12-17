import React from 'react';
import './App.css';
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import SmartHomepage from "./view/smart/SmartHomepage";

function App() {
  return (
    <div className="App">
        <HashRouter>
            <Switch>
                <Route exact component={SmartHomepage} path="/home"/>

            </Switch>
            <Redirect to='/home'/>
        </HashRouter>
    </div>
  );
}

export default App;
