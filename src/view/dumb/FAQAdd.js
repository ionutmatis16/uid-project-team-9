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
                <textarea className="new-question-text-area"
                          placeholder="Type your question here"
                          value={newQuestion.text}
                          onChange={onChangeNewQuestion}/>
            </div>
            <div className="new-question-element-div">
                <p className="new-question-label">Category</p>
                <select>
                    <option>Make a selection</option>
                    <option>General</option>
                    <option>Projects</option>
                    <option>Funding</option>
                </select>
            </div>
            <button className="ask-question-button submit-new-question"
                    // onClick={}
            >
                Submit
            </button>
        </div>
    </div>
);

export default FAQAdd;