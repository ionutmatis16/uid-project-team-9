import {EventEmitter} from "events";

class QuestionModel extends EventEmitter {
    constructor() {
        super();
        this.state = {
            questions: [
                {
                    id: 0,
                    text: "Who can submit project proposals?",
                    active: false,
                    answers: [
                        {
                            text: "Citizens who live, work or study in the current city and are at least 18 years old may participate in the participatory budgeting process."
                        }
                    ]
                },
                {
                    id: 1,
                    text: "How can I submit a project proposal?",
                    active: false,
                    answers: [
                        {
                            text: "Proposals can be sent through the City Budgeting platform site."
                        }
                    ]
                }, {
                    id: 2,
                    text: "What is the maximum sum allocated to a project?",
                    active: false,
                    answers: [
                        {
                            text: "Each proposal must have a total cost of up to 150,000 euros (including VAT)."
                        }
                    ]
                },
                {
                    id: 3,
                    text: "How many projects will be funded?",
                    active: false,
                    answers: [
                        {
                            text: "A total of 15 projects will be financed, each project having a maximum value of 150,000 Euro (including VAT)."
                        }
                    ]
                },
                {
                    id: 4,
                    text: "How many proposals can a citizen submit?",
                    active: false,
                    answers: [
                        {
                            text: "Each citizen can propose a maximum number of 1 project for each category."
                        }
                    ]
                },
                {
                    id: 5,
                    text: "How can I vote a project?",
                    active: false,
                    answers: [
                        {
                            text: "Voting takes place in two distinct stages. In the first voting phase, each citizen registered on the participatory budgeting platform can choose six projects (one for each of the six established areas).\n" +
                                "In the second stage, each citizen can choose a single project out of the 30 established in the first phase. A number of 15 projects will be selected."
                        }
                    ]
                }
            ],
            newQuestion: {
                text: "",
                category: "Make a selection"
            }
        }
    }

    toggleQuestion = (questionId) => {
        let isActive = this.state.questions[questionId].active;
        isActive = !isActive;
        this.state.questions[questionId].active = isActive;

        this.emit("changedQuestion", this.state);
    }
}

const questionModel = new QuestionModel();

export default questionModel;