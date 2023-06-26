export class Question {
    constructor(data) {
        this.category = data.category
        this.type = data.type
        this.difficulty = data.difficulty
        this.question = data.question
        this.correctAnswer = data.correct_answer
        this.incorrectAnswers = data.incorrect_answers
    }

    get questionTemplate() {

        if (`${this.type}` == 'boolean') {

            return /*html*/ `
                <div class="col-12 text-center d-flex flex-column justify-content-evenly">
                        <p class="fs-3 fw-bold"> <u>Category</u> <br> ${this.category}</p>
                        <br>
                        <p class="fs-4">${this.question}</p>
                        <br>
                    <div>
                        <button onclick="app.QuestionsController.checkAnswer('True')" class="btn btn-primary me-3 fs-5">
                        True
                        </button>
                        <button onclick="app.QuestionsController.checkAnswer('False')" class="btn btn-danger fs-5">
                        False
                        </button>
                    </div>
                </div>
            `
        }

        if (`${this.type}` == 'multiple') {

            return /*html*/`
            <div class="col-12 text-center d-flex flex-column justify-content-evenly">
                <p class="fs-3 fw-bold"> <u>Category</u> <br> ${this.category}</p>
                <br>
                <p class="fs-4">${this.question}</p>
                <br>
                <div>
                    <button onclick="app.QuestionsController.checkAnswer('${this.correctAnswer}')" class="btn btn-primary me-3 fs-5">
                        ${this.correctAnswer}
                    </button>
                    <button onclick="app.QuestionsController.checkAnswer('${this.incorrectAnswers[0]}')" class="btn btn-primary me-3 fs-5">
                        ${this.incorrectAnswers[0]}
                    </button>
                    <button onclick="app.QuestionsController.checkAnswer('${this.incorrectAnswers[1]}')" class="btn btn-primary me-3 fs-5">
                        ${this.incorrectAnswers[1]}
                    </button>
                    <button onclick="app.QuestionsController.checkAnswer('${this.incorrectAnswers[2]}')" class="btn btn-primary me-3 fs-5">
                        ${this.incorrectAnswers[2]}
                    </button>
                </div>
            </div>
            `
        }
    }
}