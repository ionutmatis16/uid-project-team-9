import React from 'react';
import "../../style/faq.css";
import {Button, Card, CardBody, Collapse} from 'reactstrap';

const FAQList = ({
                     userModelState, questions, toggleQuestion, openNewAnswer, onSubmitNewAnswer,
                     onChangeNewAnswer, resetNewAnswer
                 }) => (
    <div>

        <div className="page-title text-center">
            <h1>Frequently Asked Questions</h1>
        </div>
        {
            userModelState.currentUser.role !== "anonymous" ?
                <div className="ask-question-button-div">
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
                                        <span className="add-answer-button"
                                              onClick={event => openNewAnswer(event, question.id)}>
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
                                            <hr/>
                                        </CardBody>
                                    ))
                                }
                            </Card>
                        </Collapse>
                        <Collapse isOpen={question.newAnswer.active}>
                            <Card>
                                <CardBody>
                                    <div className="new-answer-card-div">
                                        <textarea
                                            className={"new-answer-textarea " + (question.newAnswer.textError === true ? "invalid-input" : "")}
                                            placeholder="Type your answer"
                                            onChange={event => onChangeNewAnswer(question.id, "text", event.target.value)}
                                            value={question.newAnswer.text}/>
                                        <div className="new-answer-submit-div">
                                            <button className="submit-new-answer"
                                                    onClick={() => onSubmitNewAnswer(question.id)}>
                                                Submit
                                            </button>
                                            {
                                                question.newAnswer.textError ?
                                                    <p className="invalid-new-answer">Invalid</p>
                                                    :
                                                    ""
                                            }
                                        </div>
                                        <strong className="close-new-answer"
                                                onClick={() => resetNewAnswer(question.id)}>
                                            x
                                        </strong>
                                    </div>
                                </CardBody>
                            </Card>
                        </Collapse>
                    </div>
                ))
            }
        </div>
    </div>
);

export default FAQList;