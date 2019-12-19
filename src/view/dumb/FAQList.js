import React from 'react';
import "../../style/faq.css";
import {Button, Card, CardBody, Collapse} from 'reactstrap';

const FAQList = ({userModelState, questions, toggleQuestion}) => (
    <div>

        <div className="page-title text-center">
            <h1>Frequently Asked Questions</h1>
        </div>
        {
            userModelState.currentUser.role !== "anonymous" ?
                <div>
                    <button className="ask-question-button"
                            onClick={() => window.location.assign("#/faq/add")}>
                        Ask question
                    </button>
                </div>
                :
                ""
        }

        <div className="questions-div">
            {
                questions.map(question => (
                    <div key={question.id}
                         style={{'marginBottom': '20px'}}>
                        <Button className="question-card"
                                onClick={() => toggleQuestion(question.id)}>
                            {"    " + (question.id + 1) + ". " + question.text}
                            <span>
                                {
                                    question.active ?
                                        <i className="fa fa-angle-up"/>
                                        :
                                        <i className="fa fa-angle-down"/>
                                }
                                {
                                    userModelState.currentUser.role !== "anonymous" ?
                                        <span className="add-answer-button">
                                        +
                                        </span>
                                        :
                                        ""
                                }
                            </span>
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