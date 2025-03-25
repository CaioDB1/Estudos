const correctAnswers = ['A','B','D','C']
const finalScoreContainer = document.querySelector('.result')
const form = document.querySelector('.quiz-form')

let score = 0


const getUserAnswers = () => {
    // const userAnswers = [
    //     form.inputQuestion1.value,
    //     form.inputQuestion2.value,
    //     form.inputQuestion3.value,
    //     form.inputQuestion4.value,
    // ]
    // return userAnswers
    let userAnswers = []

    correctAnswers.forEach((_, index) => {
        userAnswers.push(form[`inputQuestion${index+1}`].value)
    })

    return userAnswers
}

const calculateUserScore = (userAnswers) => {
    userAnswers.forEach((userAnswer, index) => {
        //console.log(userAnswer)
        const isUserAnswerCorrect = userAnswer === correctAnswers[index]
        if(isUserAnswerCorrect){
            score += 25
        }
    })
}

// const calculateUserScore = userAnswers.reduce((score, answer, index) => {
//     if(answer === correctAnswers[index]){
//         score += 25
//     }
//     return score
// }, 0)

// const calculateUserScore = (userAnswers) => {
//     return userAnswers.reduce((score, answer, index) => {
//         if (answer === correctAnswers[index]) {
//             score += 25;
//         }
//         return score
//     }, 0)
// }


const showFinalScore = () => {
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
    finalScoreContainer.classList.remove('d-none')
}

const animateFinalScore = () => {
    let counter = 0
    const timer = setInterval(() => {        
        if(counter === score){
            clearInterval(timer)
        }
        finalScoreContainer.querySelector('span').textContent = `${counter++}%`

    }, 10)
}

form.addEventListener('submit', event => {
    score = 0

    event.preventDefault()
    const userAnswers = getUserAnswers()
    calculateUserScore(userAnswers)
    showFinalScore()
    //console.log(`Você acertou ${score}% das questões.`)
    animateFinalScore()
    
})



