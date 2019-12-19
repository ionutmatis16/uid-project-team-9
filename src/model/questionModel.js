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
                    ],
                    newAnswer: {
                        text: "",
                        textError: false,
                        active: false
                    }
                },
                {
                    id: 1,
                    text: "How can I submit a project proposal?",
                    active: false,
                    answers: [
                        {
                            text: "Proposals can be sent through the City Budgeting platform site."
                        }
                    ],
                    newAnswer: {
                        text: "",
                        textError: false,
                        active: false
                    }
                }, {
                    id: 2,
                    text: "What is the maximum sum allocated to a project?",
                    active: false,
                    answers: [
                        {
                            text: "Each proposal must have a total cost of up to 150,000 euros (including VAT)."
                        }
                    ],
                    newAnswer: {
                        text: "",
                        textError: false,
                        active: false
                    }
                },
                {
                    id: 3,
                    text: "How many projects will be funded?",
                    active: false,
                    answers: [
                        {
                            text: "A total of 15 projects will be financed, each project having a maximum value of 150,000 Euro (including VAT)."
                        }
                    ],
                    newAnswer: {
                        text: "",
                        textError: false,
                        active: false
                    }
                },
                {
                    id: 4,
                    text: "How many proposals can a citizen submit?",
                    active: false,
                    answers: [
                        {
                            text: "Each citizen can propose a maximum number of 1 project for each category."
                        }
                    ],
                    newAnswer: {
                        text: "",
                        textError: false,
                        active: false
                    }
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
                    ],
                    newAnswer: {
                        text: "",
                        textError: false,
                        active: false
                    }
                }
            ],
            questionIndex: 6,
            newQuestion: {
                text: "",
                textError: false,
                category: "",
                categoryError: false
            }
        }
    }

    toggleQuestion = (questionId) => {
        let isActive = this.state.questions[questionId].active;
        isActive = !isActive;
        this.state.questions[questionId].active = isActive;

        this.emit("changedQuestion", this.state);
    };

    addQuestion = (questionText) => {
        this.state.questions.push({
            id: this.state.questionIndex++,
            text: questionText,
            active: false,
            answers: [],
            newAnswer: {
                text: "",
                textError: false,
                active: false
            }
        });

        window.location.assign("#/faq");
    };

    initNewQuestion = () => {
        this.onChangeNewQuestion("text", "");
        this.onChangeNewQuestion("category", "");
        this.onChangeNewQuestion("textError", false);
        this.onChangeNewQuestion("categoryError", false);
    };

    onChangeNewQuestion = (property, value) => {
        this.state = {
            ...this.state,
            newQuestion: {
                ...this.state.newQuestion,
                [property]: value
            }
        };

        this.emit("changedNewQuestion", this.state);
    };

    onSubmitNewQuestion = () => {
        this.onChangeNewQuestion("textError", false);
        this.onChangeNewQuestion("categoryError", false);

        if (this.state.newQuestion.text === "") {
            this.onChangeNewQuestion("textError", true);
        }

        if (this.state.newQuestion.category === "") {
            this.onChangeNewQuestion("categoryError", true);
        }

        this.emit("changedNewQuestion", this.state);

        if (!this.state.newQuestion.textError && !this.state.newQuestion.categoryError) {
            this.addQuestion(this.state.newQuestion.text);
        }
    };

    resetNewAnswer = (questionId) => {
        this.state.questions[questionId].newAnswer.text = "";
        this.state.questions[questionId].newAnswer.textError = false;
        this.state.questions[questionId].newAnswer.active = false;

        this.emit("changedNewAnswer", this.state);
    };

    onChangeNewAnswer = (questionId, property, value) => {
        let question = this.state.questions[questionId];
        question.newAnswer[property] = value;

        this.emit("changedNewAnswer", this.state);
    };

    openNewAnswer = (event, questionId) => {
        event.stopPropagation();
        let newAnswerActive = this.state.questions[questionId].newAnswer.active;
        this.onChangeNewAnswer(questionId, "active", !newAnswerActive);

        this.emit("changedNewAnswer", this.state);
    };

    addAnswer = (questionId, answerText) => {
        let answers = this.state.questions[questionId].answers;
        answers.push({
            text: answerText
        });

        this.resetNewAnswer(questionId);

        this.emit("changedQuestion", this.state);
    };

    onSubmitNewAnswer = (questionId) => {
        let newAnswer = this.state.questions[questionId].newAnswer;
        let invalidAnswer = false;

        if (newAnswer.text === "") {
            invalidAnswer = true;
        }

        this.onChangeNewAnswer(questionId, "textError", invalidAnswer);

        if (!invalidAnswer) {
            this.onChangeNewAnswer(questionId, "active", false);
            this.addAnswer(questionId, newAnswer.text);
            this.state.questions[questionId].active = true;
        }

        this.emit("changedNewAnswer", this.state);
    }
}

const questionModel = new QuestionModel();

export default questionModel;