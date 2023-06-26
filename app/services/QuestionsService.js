import { AppState } from "../AppState.js"
import { Question } from "../models/Question.js"
import { Pop } from "../utils/Pop.js"
import { questionsApi } from "./AxiosService.js"

class QuestionsService {
	async getCartoonQuestions() {
		const response = await questionsApi.get('?amount=1&category=32')

		console.log(response)

		const questionsArray = response.data.results.map(pojo => new Question(pojo))

		console.log(questionsArray)

		AppState.questions = questionsArray

		console.log(AppState.questions)

	}

	async getComicsQuestions() {
		const response = await questionsApi.get('?amount=1&category=29')

		console.log(response)

		const questionsArray = response.data.results.map(pojo => new Question(pojo))

		console.log(questionsArray)

		AppState.questions = questionsArray

		console.log(AppState.questions)
	}

	async getTvQuestions() {
		const response = await questionsApi.get('?amount=1&category=14')

		console.log(response)

		const questionsArray = response.data.results.map(pojo => new Question(pojo))

		console.log(questionsArray)

		AppState.questions = questionsArray

		console.log(AppState.questions)
	}

	checkAnswer(input) {
		let question = AppState.questions[0]

		//NOTE: NOOO!! Spaghetti is gross. Just get it out of the array by getting it at the index (above) ❌ let answer = question.find(q => q.correctAnswer) ❌ 

		console.log(question)

		if (input == question.correctAnswer) {
			Pop.success("Great job!")
		}
		else (Pop.error("Not quite!"))
	}
}

export const questionsService = new QuestionsService