
// @ts-ignore
export const questionsApi = axios.create({
    baseURL: 'https://opentdb.com/api.php',
    timeout: 8000,
})


// STUB Refactored API's
// // @ts-ignore
// export const cartoonQuestionApi = axios.create({
//     baseURL: 'https://opentdb.com/api.php?amount=1&category=32&type=boolean',
//     timeout: 8000,
// })

// // @ts-ignore
// export const comicsQuestionApi = axios.create({
//     baseURL: 'https://opentdb.com/api.php?amount=1&category=29&type=boolean',
//     timeout: 8000,
// })

// // @ts-ignore
// export const tvQuestionsApi = axios.create({
//     baseURL: 'https://opentdb.com/api.php?amount=1&category=14&type=boolean',
//     timeout: 8000,
// })