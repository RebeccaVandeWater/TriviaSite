import { AppState } from "../AppState.js"
import { questionsService } from "../services/QuestionsService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawQuestion() {
    const questions = AppState.questions

    let template = ''

    questions.forEach(q => template += q.questionTemplate)

    setHTML('questionSection', template)
}

export class QuestionsController {
    constructor() {
        console.log("Questions Controller Loaded.")

        AppState.on('questions', _drawQuestion)
    }

    async getCartoonQuestions() {
        try {
            await questionsService.getCartoonQuestions()
            Pop.success("Here is a question about cartoons")
        }
        catch (error) {
            console.log(error)
            Pop.error(error.message)
        }
    }

    async getComicsQuestions() {
        try {
            await questionsService.getComicsQuestions()
            Pop.success("Here is a question about comic books")
        }

        catch (error) {
            console.log(error)
            Pop.error(error.message)
        }
    }

    async getTvQuestions() {
        try {
            await questionsService.getTvQuestions()
            Pop.success("Here is a question about TV")
        }

        catch (error) {
            console.log(error)
            Pop.error(error.message)
        }
    }

    checkAnswer(input) {
        questionsService.checkAnswer(input)

        const question = AppState.questions[0]

        if (question.category == "Entertainment: Cartoon & Animations") {
            this.getCartoonQuestions()
        }

        if (question.category == "Entertainment: Comics") {
            this.getComicsQuestions()
        }

        if (question.category == "Entertainment: Television") {
            this.getTvQuestions()
        }
    }
}