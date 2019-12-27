import React, {useState} from 'react';
import {Form, Button, Input} from 'reactstrap';
import "../../style/feedback.css";

const Feedback = () => {
    const [isFeedbackError, setFeedbackError] = useState(false);
    const [isBugError, setBugError] = useState(false);
    return (
        <div>
            <div className="t10-title text-center">
                <h1>Send Feedback / Report a bug</h1>
            </div>
            <div className="t10-content">
                <div className="t10-forms-container">
                    <h3>Share your thoughts</h3>
                    <Form className="t10-form">
                        <Input type="textarea"
                               id="t10-feedback-form"
                               onChange={() => {
                                   setFeedbackError(document.getElementById("t10-feedback-form").value.length < 5)
                               }}
                               className={isFeedbackError ? "t10-error-field" : ""}
                               name="feedback"/>
                        <Button className="t10-button">Send</Button>
                    </Form>
                    <h3>Report a bug</h3>
                    <Form className="t10-form">
                        <Input id="t10-bug-form"
                               type="textarea"
                               onChange={() => {
                                   setBugError(document.getElementById("t10-bug-form").value.length < 5)
                               }}
                               className={isBugError ? "t10-error-field" : ""} name="report-a-bug"/>
                        <Input className="t10-button" type="file" name="screenshot"/>
                        <Button onClick={() => false} className="t10-button">Submit</Button>
                    </Form>
                </div>

                <img src={"/images/feedback.jpg"} alt="Feedback"/>
            </div>
        </div>
    );
};
export default Feedback;