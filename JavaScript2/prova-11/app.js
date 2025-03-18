// Exercício 1 (Fácil)
// Descrição: No evento keyup, exiba no console o valor atual do input username em tempo real.

// const form = document.querySelector('form')

// form.username.addEventListener('keyup', event => {
//     console.log(event.target.value)
// })

// Exercício 2 (Fácil)
// Descrição: No evento submit, impeça o recarregamento da página e mostre no .feedback a mensagem "Você digitou: [username]".

// const form = document.querySelector('form')
// const feedback = document.querySelector('.feedback')
// form.addEventListener('submit', event => {
//     event.preventDefault()
//     const username = event.target.username.value
//     feedback.textContent = `Você digitou: ${username}`
// })


// Exercício 3 (Fácil)
// Descrição: No evento keyup, aplique a classe success ao input se o username tiver mais de 3 caracteres; caso contrário, aplique error.

// const form = document.querySelector('form')
// form.username.addEventListener('keyup', event => {
//     if(event.target.value.length > 3){
//         // event.target.classList.remove('error')
//         // event.target.classList.add('success')
//         event.target.setAttribute('class', 'success');
//     } else{
//         // event.target.classList.remove('success')
//         // event.target.classList.add('error')
//         event.target.setAttribute('class', 'error')
//     } 
// })


// Exercício 4 (Médio)
// Descrição: No evento submit, use uma regex para verificar se o username contém apenas letras e números. Exiba "Username válido" ou "Use apenas letras e números" no .feedback.

// const form = document.querySelector('form')
// //const regex = /^[a-zA-Z0-9]{1,}$/
// const regex = /^[a-zA-Z0-9]+$/
// const feedback = document.querySelector('.feedback')
// form.addEventListener('submit', event => {
//     event.preventDefault()
//     //console.log(event.target.username.value)
//     console.log(regex.test(event.target.username.value))
//     if(regex.test(event.target.username.value)){
//         feedback.textContent = `Username válido`
//     } else feedback.textContent = `Use apenas letras e números no .feedback`
// })



// Exercício 5 (Médio)
// Descrição: Crie um array de usernames proibidos (ex.: ['guest', 'root']). No evento submit, use forEach para verificar se o username digitado está no array. Exiba "Username proibido" ou "Username disponível" no .feedback.

// const usernames = ['guest', 'root']
// const feedback = document.querySelector('.feedback')
// const form = document.querySelector('form')
// let userProibido
// form.addEventListener('submit', event => {
//     event.preventDefault()
//     usernames.forEach(nome => {
//         console.log(nome)
//         if(event.target.username.value == nome){
//             //feedback.textContent = `Username proibido`
//             userProibido = true
//             }
//     })
//     if(userProibido)feedback.textContent = `Username proibido`
//     else feedback.textContent = `Username disponível`
// })


// Exercício 6 (Médio)
// Descrição: No evento keyup, use regex para verificar se o username tem entre 5 e 10 caracteres e começa com uma letra. Aplique success ou error ao input.

// const form = document.querySelector('form')
// const regex = /^[a-zA-Z][a-zA-Z0-9]{4,9}$/
// form.username.addEventListener('keyup', event => {
//     if(regex.test(event.target.value)){
//         event.target.setAttribute('class', 'success')
//     } else event.target.setAttribute('class', 'error')
// })


// Exercício 7 (Difícil)
// Descrição: No evento submit, use some para verificar se o username está em um array de usernames válidos (ex.: ['alice', 'bob']). Se estiver, exiba "Login bem-sucedido" no .feedback; caso contrário, "Username inválido".

// const form = document.querySelector('form')
// const username = ['alice', 'bob']
// const feedback = document.querySelector('.feedback')
// form.addEventListener('submit', event => {
//     event.preventDefault()
//     if(username.some(nome => event.target.username.value === nome)){
//         feedback.textContent = `Login bem-sucedido`
//     } else feedback.textContent = `Username inválido`
// })

// Exercício 8 (Difícil)
// Descrição: No evento keyup, verifique se o username contém pelo menos uma letra maiúscula e um número (usando regex). Aplique success se válido, senão error. No submit, exiba uma mensagem confirmando a validação.

// const form = document.querySelector('form')
// const feedback = document.querySelector('.feedback')

// form.username.addEventListener('keyup', event => {
//     const regex = /[A-Z][0-9]/
//     if(regex.test(event.target.value)){
//         event.target.setAttribute('class','success')
//     } else event.target.setAttribute('class', 'error')
// })

// form.addEventListener('submit', event => {
//     event.preventDefault()
//     feedback.textContent = `Validado: ${form.username.className}`
// })


// Exercício 9 (Muito Difícil)
// Descrição: Crie um array de objetos com usernames e níveis (ex.: [{username: 'john', level: 1}, {username: 'doe', level: 2}]). No evento submit, use forEach para encontrar o nível do username digitado e exiba "Usuário [username] - Nível [level]" ou "Usuário não encontrado" no .feedback.

const pessoas = [
    {username: 'john', level: 1},
    {username: 'doe', level: 2}
]
const userNot = `Usuário não encontrado`
let userVal 
const feedback = document.querySelector('.feedback')
const form = document.querySelector('form')
form.addEventListener('submit', event => {
    event.preventDefault()
    pessoas.forEach(pessoa => {
        if(pessoa.username === event.target.username.value){
            userVal = pessoa.level}
    })
    if(userVal == null){
        feedback.textContent = userNot
    } else feedback.textContent = `Usuário ${event.target.username.value} - Nível ${userVal}`
})