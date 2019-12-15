import React from 'react';
import MyNavbar from "./navbar/MyNavbar";
import "../../style/FAQ.css";

const FAQList = ({userModelState, questions}) => (
    <div>
        <MyNavbar userModelState={userModelState}/>
        <div className="page-title text-center">
            <h1>Frequently Asked Questions</h1>
        </div>
        {
            questions.map((question, index) => (
                <div key={index}>
                    <p>{question.text}</p>
                </div>
            ))
        }
    </div>
);

export default FAQList;