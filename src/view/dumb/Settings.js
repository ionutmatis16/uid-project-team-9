import React from 'react';
import "../../style/settings.css";
import {Button, Card, CardBody, Collapse} from 'reactstrap';
import DropZone from "react-drop-zone";

function checkIfPassword(text, newValuePass, holdNewValue, style) {
    if (text === "Password")
        return <input className="new-val-pass" style={style} value={newValuePass} placeholder="Confirm value" onChange={event => holdNewValue(event.target.value,"newValuePass")}/>
}

function resetValues(event, holdNewValue, toggleSetting, id, setStyle){
    holdNewValue("","newValue");
    holdNewValue("","newValuePass");
    setStyle(event, id,{'background-color':''}, false);
    toggleSetting(id);
}

function setProperty(event, setting, newValue, newValuePass, setStateForProperty, setStyle) {
    if (checkField(event, newValue, newValuePass, setStyle, setting)) {
        setStateForProperty(event, setting.id, newValue);
    }
}

function checkField(event, newValue, newValuePass, setStyle, setting) {
    switch (setting.text) {
        case "Username":
            if (newValue === "user" || newValue === "") {
                setStyle(event, setting.id, {'background-color':'Tomato'}, true);
                return false;
            } else {
                setStyle(event, setting.id,{'background-color':''}, false);
                return true;
            }
        case "Password":
            if (newValue !== newValuePass || newValue ==="") {
                setStyle(event, setting.id, {'background-color':'Tomato'}, true);
                return false;
            }
            else{
                setStyle(event, setting.id,{'background-color':''}, false);
                return true;
            }
        case "Email":
            let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(String(newValue).toLowerCase())){
                setStyle(event, setting.id, {'background-color':'Tomato'}, true);
                return false;
            }
            else{
                setStyle(event, setting.id,{'background-color':''}, false);
                return true;
            }
        case "Phone":
            let re2 = /^07[0-9]{8}$/;
            if (!re2.test(String(newValue).toLowerCase())){
                setStyle(event, setting.id, {'background-color':'Tomato'}, true);
                return false;
            }
            else{
                setStyle(event, setting.id,{'background-color':''}, false);
                return true;
            }
        case "Interests": return true;
        case "Address": return true;
        default: return false;
    }
}

const Settings = ({ setStateForProperty, settings, toggleSetting, holdNewValue,
                    newValue, newValuePass, userModelState, setStyle, setImageSource,
                    imageSource}) => (
    <div>

        <div className="page-title text-center">
            <h1>Account Settings</h1>
           <DropZone onDrop={(file) => setImageSource(file)} accept="image/*" >
               {
                   () =>
                       <span className="dropZone" >
                           No file
                           <img className="preview" src={imageSource}/>
                       </span>
               }
           </DropZone>
        </div>

        <div className="settings-div">
            {
                settings.map(setting => (
                    <div key={setting.id}
                         style={{'marginBottom': '20px'}}>
                        <Button className="question-card"
                                onClick={() => toggleSetting(setting.id)}>
                            {setting.text}
                            <span className="settings-val">{setting.value}</span>
                            <span>
                                {
                                    setting.active ?
                                        <i className="fa fa-angle-up"/>
                                        :
                                        <i className="fa fa-angle-down"/>
                                }
                            </span>
                        </Button>
                        <Collapse isOpen={setting.active}>
                            <Card>
                                <CardBody key={setting.id}>
                                    <input className="new-val" style={userModelState.settings[setting.id].style} value={userModelState.newValue} placeholder="Insert new value" onChange={event => holdNewValue(event.target.value,"newValue")}/>
                                    { checkIfPassword(setting.text, newValuePass, holdNewValue, userModelState.settings[setting.id].style) }
                                    { userModelState.settings[setting.id].error === true ?
                                      <span className="errorMsg">{userModelState.settings[setting.id].errorMsg}</span>:<span/>}
                                    <button className="save" onClick={function(event) {setProperty(event, setting, newValue, newValuePass, setStateForProperty, setStyle)}}>Save</button>
                                    <button className="cancel" onClick={function(event){resetValues(event, holdNewValue, toggleSetting, setting.id, setStyle)}}>Cancel</button>
                                </CardBody>
                            </Card>
                        </Collapse>
                    </div>
                ))
            }
        </div>
    </div>
);

export default Settings;