const respostas = ['A', 'B','C']
const resultadoTxt = document.querySelector('#resultadoTxt')
const resultadoDiv = document.querySelector('#resultadoDiv')
const form = document.querySelector('form')
let score

const titulo = document.querySelector('h1')
form.addEventListener('submit', event => {
    score = 0
    const respostasUser = [form.q1.value, form.q2.value, form.q3.value]

    event.preventDefault()
    respostas.forEach((resposta, index) => {
        if(respostasUser[index] === resposta){
            score++
        }
    })
    if(score === 1)resultadoTxt.textContent = `Acertou ${score} questão`
    else resultadoTxt.textContent = `Acertou ${score} questões`
    
    scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    resultadoDiv.classList.remove('d-none')
})

