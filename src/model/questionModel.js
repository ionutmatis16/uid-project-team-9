import {EventEmitter} from "events";

class QuestionModel extends EventEmitter {
    constructor() {
        super();
        this.state = {
            questions: [
                {
                    id: 1,
                    text: "Who can submit project proposals?",
                    clicked: false,
                    answers: [
                        {
                            text: "dummy text 1"
                        }
                    ]
                },
                {
                    id: 2,
                    text: "Who can I submit a project proposal?",
                    clicked: false,
                    answers: [
                        {
                            text: "dummy text 2"
                        }
                    ]
                }, {
                    id: 3,
                    text: "What is the maximum sum allocated to a project?",
                    clicked: false,
                    answers: [
                        {
                            text: "dummy text 3"
                        }
                    ]
                },
                {
                    id: 4,
                    text: "How many projects will be funded?",
                    clicked: false,
                    answers: [
                        {
                            text: "dummy text 4"
                        }
                    ]
                },
                {
                    id: 5,
                    text: "How many proposals can a citizen submit?",
                    clicked: false,
                    answers: [
                        {
                            text: "Each citizen can propose a maximu number of 1 project for each category"
                        }
                    ]
                },
                {
                    id: 6,
                    text: "How can I vote a project??",
                    clicked: false,
                    answers: [
                        {
                            text: "dummy text 6"
                        }
                    ]
                }
            ]
        }
    }
}

const questionModel = new QuestionModel();

export default questionModel;