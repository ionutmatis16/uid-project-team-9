import React from 'react';
import MyNavbar from "./navbar/MyNavbar";
import "../../style/faq.css";
import {Button, Card, CardBody, Collapse} from 'reactstrap';

const FAQList = ({userModelState, questions, toggleQuestion}) => (
    <div>
        <MyNavbar userModelState={userModelState}/>
        <div className="page-title text-center">
            <h1>Frequently Asked Questions</h1>
        </div>
        <div className="questions-div">
            {
                questions.map(question => (
                    <div key={question.id}
                         style={{'marginBottom': '20px'}}>
                        <Button className="question-card"
                                onClick={() => toggleQuestion(question.id)}>
                            {"    " + (question.id + 1) + ". " + question.text}
                            {
                                question.active ?
                                    <i className="fa fa-angle-down"/>
                                    :
                                    <i className="fa fa-angle-up"/>
                            }
                        </Button>
                        <Collapse isOpen={question.active}>
                            <Card>
                                {
                                    question.answers.map((answer, index) => (
                                        <CardBody key={index}>
                                            {answer.text}
                                        </CardBody>
                                    ))
                                }
                            </Card>
                        </Collapse>
                    </div>
                ))
            }
        </div>
    </div>
);

export default FAQList;