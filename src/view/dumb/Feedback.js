import React from 'react';
import { Form, Button, Input } from 'reactstrap';
import "../../style/feedback.css";

const Feedback = () => (
    <div>
        <div className="t10-title text-center">
            <h1>Send Feedback / Report a bug</h1>
        </div>
        <div className="t10-content">
            <div className="t10-forms-container">
                <h3>Share your thoughts</h3>
                <Form className="t10-form">
                    <Input type="textarea" name="feedback" />
                    <Button className="t10-button">Send</Button>
                </Form>
                <h3>Report a bug</h3>
                <Form className="t10-form">
                    <Input type="textarea" name="report-a-bug" />
                    <Input className="t10-button" type="file" name="screenshot" />
                    <Button className="t10-button">Submit</Button>
                </Form>
            </div>

            <img src={"/images/feedback.jpg"} alt="Feedback" />
        </div>
    </div>
);

export default Feedback;