const correctAnswers = ['B','B','B','B']
const finalResult = document.querySelector('.result')
const form = document.querySelector('.quiz-form')

form.addEventListener('submit', event => {
    let score = 0
    let counter = 0
    event.preventDefault()
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]
    userAnswers.forEach((userAnswer, index) => {
        //console.log(userAnswer)
        if(userAnswer === correctAnswers[index]){
            score += 25
        }
    })
    scrollTo(0, 0)
    //console.log(`Você acertou ${score}% das questões.`)
    const timer = setInterval(() => {        
        finalResult.querySelector('span').textContent = `${counter}%`
        if(counter === score){
            clearInterval(timer)
        }
        counter++
    }, 10)
    finalResult.classList.remove('d-none')
})



