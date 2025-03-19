const resposta = 'B'
const texto = document.querySelector('#textoResposta')
const form = document.querySelector('form')
console.log(texto.textContent)
form.addEventListener('submit', event => {
    event.preventDefault()
    console.log(event.target.inputQuestao1.value)
    if(event.target.inputQuestao1.value === resposta){
        texto.textContent = 'Você acertou!'
    } else texto.textContent = 'Você errou!'
})