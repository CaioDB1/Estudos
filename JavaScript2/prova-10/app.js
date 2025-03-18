// Exercício 1 (Fácil)
// Descrição: No envio do formulário, impeça o recarregamento da página e exiba no console a mensagem "Olá, você enviou: [valor do input]!".

// const form = document.querySelector('form')
// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     const input = event.target.input.value
//     console.log(`Olá, você enviou: ${input}`)
// })

// Exercício 2 (Fácil)
// Descrição: No envio do formulário, verifique se o input está vazio. Se sim, exiba "Digite algo!" no console; caso contrário, exiba o número de caracteres digitados.

// const form = document.querySelector('form')
// form.addEventListener('submit', event => {
//     event.preventDefault()
//     const input = event.target.input.value
//     if(input === '') console.log('Digite algo!')
//         else console.log(`Número de caracteres digitados: ${input.length} `)
// })

// Exercício 3 (Fácil)
// Descrição: No envio do formulário, capture o valor do input e exiba no console apenas a primeira letra em maiúscula, como "Primeira letra: [letra]".

// const form = document.querySelector('form')
// form.addEventListener('submit', event => {
//     event.preventDefault()
//     const input = event.target.input.value
//     console.log(`Primeira letra: ${input[0].toUpperCase()}`)
// })

// Exercício 4 (Médio)
// Descrição: No envio do formulário, use uma regex para verificar se o valor contém apenas números. Se sim, exiba "Apenas números!" no console; caso contrário, exiba quantas letras (a-z, A-Z) há no texto.

// const form = document.querySelector('form')
// form.addEventListener('submit', event => {
//     const regex = /^[0-9]{1,}$/
//     const regex2 = /[a-zA-Z]/g
//     event.preventDefault()
//     const input = event.target.input.value
//     if(regex.test(input)) console.log('Apenas números!')
//         else
//     {
//         console.log(`Há ${input.match(regex2).length} letras no texto.`)
//     }
// })

// Exercício 5 (Médio)
// Descrição: No envio do formulário, verifique se o valor tem pelo menos 3 caracteres e começa com uma letra (usando regex). Exiba "Válido!" ou "Inválido!" no console.

// const form = document.querySelector('form')
// form.addEventListener('submit', event => {
//     const regex = /^[A-Za-z]/
//     event.preventDefault()
//     const input = event.target.input.value
//     if(input.length >= 3 && regex.test(input)){
//         console.log('Válido!')
//     } else console.log('Inválido!')
// })


// Exercício 6 (Médio)
// Descrição: No envio do formulário, use uma regex para verificar se o valor termina com um número. Se sim, exiba esse número no console; caso contrário, exiba "Não termina com número!".

// const form = document.querySelector('form')
// form.addEventListener('submit', event => {
//     const regex = /[0-9]$/
//     event.preventDefault()
//     const input = event.target.input.value
//     if(regex.test(input)){
//         console.log(input[input.length - 1])
//     } else console.log('Não termina com número!')
// })
