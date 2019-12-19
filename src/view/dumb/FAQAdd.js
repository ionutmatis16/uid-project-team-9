import React from 'react';
import "../../style/faq.css";

const FAQAdd = ({newQuestion, onChangeNewQuestion, onSubmitNewQuestion}) => (
    <div>

        <div className="page-title text-center">
            <br/>
            <h1>Ask a question</h1>
            <br/>
        </div>
        <div className="ask-question-main-div">
            <div className="new-question-element-div">
                <p className="new-question-label">Your question</p>
                <textarea
                    className={"new-question-text-area " + (newQuestion.textError === true ? "invalid-input" : "")}
                    placeholder="Type your question here"
                    value={newQuestion.text}
                    onChange={e => onChangeNewQuestion("text", e.target.value)}/>
            </div>
            <div className="new-question-element-div">
                <p className="new-question-label">Category</p>
                <select className={newQuestion.categoryError === true ? "invalid-input" : ""}
                        onChange={e => onChangeNewQuestion("category", e.target.value)}>
                    <option value="">Make a selection</option>
                    <option value="general">General</option>
                    <option value="projects">Projects</option>
                    <option value="funding">Funding</option>
                </select>
            </div>
            <button className="ask-question-button submit-new-question"
                    onClick={onSubmitNewQuestion}>
                Submit
            </button>
            {
                newQuestion.textError === true ?
                    <p className="invalid-message invalid-text">Invalid data</p>
                    :
                    ""
            }
            {
                newQuestion.categoryError === true ?
                    <p className="invalid-message invalid-category">Invalid selection</p>
                    :
                    ""
            }
        </div>
    </div>
);

export default FAQAdd;