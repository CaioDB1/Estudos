// Exercício 1 (Fácil)
// Descrição: Ao clicar no botão, altere o texto do <h2> para "Você clicou!" e mude a cor de fundo do <div class="area"> para "pink".

//const botao = document.querySelector('button')
// const botao = document.querySelector('#botao')
// const h2 = document.querySelector('h2')
// const div = document.querySelector('.area')

// botao.addEventListener('click', () => {
//     h2.textContent = 'Você clicou!'
//     div.style.background = 'pink'
// })

// Exercício 2 (Fácil)
// Descrição: Quando o mouse entrar no <div class="area">, exiba no console "Entrou!" e altere o texto do <h2> para "Mouse detectado".

// const area = document.querySelector('.area')
// const h2 = document.querySelector('h2')

// area.addEventListener('mouseover', () => {
//     console.log('Entrou!')
//     h2.textContent = 'Mouse detectado'
// })


// Exercício 3 (Médio)
// Descrição: Crie um array com 4 frutas. Ao clicar no botão, use forEach para adicionar cada fruta como um <li> na <ul class="lista">, mas apenas se o nome da fruta tiver mais de 3 letras.

// const frutas = ['abacate', 'maçã', 'banana', 'uva']
// const botao = document.querySelector('#botao')
// const lista = document.querySelector('.lista')
// botao.addEventListener('click', () => {
//     frutas.forEach(fruta => {
//         if(fruta.length > 3){
//             lista.innerHTML += `<li>${fruta}</li>`
//         }
//     })
// })


// Exercício 4 (Médio)
// Descrição: Quando o mouse sair do <div class="area">, verifique se o array valores = [5, 10, 15, 20] contém um número maior que 12 usando some. Exiba o resultado ("Sim" ou "Não") no texto do <div>.

// const area = document.querySelector('.area')
// const valores = [5, 10, 15, 20]

// area.addEventListener('mouseleave', () => {
//     if(valores.some(num => num > 12)){
//         area.textContent = 'Sim'
//     } else {area.textContent =  'Não'}
// })


// Exercício 5 (Médio)
// Descrição: Ao clicar no <h2>, crie um array com 3 cores e use forEach para alterar a cor de fundo do <body>, do <div class="area"> e do <button> (nessa ordem).

// const h2 = document.querySelector('h2')
// const cores = ['yellow', 'blue', 'pink']
// const body = document.body
// const area = document.querySelector('.area')
// const botao = document.querySelector('button')

// h2.addEventListener('click', () => {
//     cores.forEach((cor, index) => {
//         if(index === 0){
//             body.style.background = cor
//         }
//          if(index === 1){
//             area.style.background = cor
//         }
//         if(index === 2){
//             botao.style.background = cor
//         }
//     })
// })

// Exercício 6 (Difícil)
// Descrição: Crie um array de objetos com nomes de animais e seus sons. Ao clicar no botão, adicione à <ul> cada animal cujo som tenha mais de 4 letras, e mude o texto do <h2> para "Animais adicionados!".

// const animais = [
//     { nome: 'Gato', som: 'miau' },
//     { nome: 'Cachorro', som: 'latido' },
//     { nome: 'Vaca', som: 'muuuu' }
// ]

// const lista = document.querySelector('.lista')
// const botao = document.querySelector('button')
// const h2 = document.querySelector('h2')
// botao.addEventListener('click', () => {
//     animais.forEach(animal => {
//         if(animal.som.length > 4){
//             lista.innerHTML += `<li>${animal.nome}</li>`
//         }
//     })
//     h2.textContent = 'Animais adicionados!'

// })


// Exercício 7 (Difícil)
// Descrição: Quando o mouse entrar no <div class="area">, inicie uma contagem de 3 segundos usando setTimeout. Se o mouse sair antes, cancele a contagem. Se completar, mude o texto do <div> para "3 segundos!".

// let timer
// const area = document.querySelector('.area')
// const div = document.querySelector('div')
// area.addEventListener('mouseover', () => {
//     timer = setTimeout(() => {
//         div.textContent = '3 segundos!'
//     }, 3000)
// })
// area.addEventListener('mouseleave', () => {
//     clearTimeout(timer)
//     console.log('Mouse saiu')
// })


// Exercício 8 (Muito Difícil)
// Descrição: Crie um array com 5 números. A cada clique no botão, verifique se algum número é par usando some. Se sim, adicione todos os números como <li> na <ul> e mude a cor do <div class="area"> para "yellow". Caso contrário, exiba "Nenhum par!" no console.

// const numeros = [1,2,5]
// const botao = document.querySelector('button')
// const ul = document.querySelector('ul')
// const area = document.querySelector('.area')

// botao.addEventListener('click', () => {
//     if(numeros.some(num => num%2 == 0)){
//         numeros.forEach(num => {
//             ul.innerHTML += `<li>${num}</li>`
//         })
//         area.style.background = 'yellow'
//     } else console.log('Nenhum par!')
// })

// Exercício 9 (Muito Difícil)
// Descrição: Crie um array de objetos com tarefas e status (concluída ou não). Ao clicar no <h2>, verifique se todas as tarefas estão concluídas com every. Se sim, mude o texto do <div class="area"> para "Tudo concluído!". Caso contrário, liste as tarefas não concluídas na <ul>.

// const tarefas = [
//     { nome: 'Estudar', concluida: false },
//     { nome: 'Trabalhar', concluida: true },
//     { nome: 'Dormir', concluida: false }
// ]
// const tarefasConcluidas = tarefas.every(tarefa => tarefa.concluida == true)
// const area = document.querySelector('.area')
// const lista = document.querySelector('.lista')
// const h2 = document.querySelector('h2')
// h2.addEventListener('click', () => {
//     if(tarefasConcluidas){
//         area.textContent = 'Tudo concluído!'
//     } else {
//         tarefas.forEach((tarefa) => {
//             if(!tarefa.concluida){
//                 lista.innerHTML += `<li>${tarefa.nome}</li>`
//             }
//         })
//     }
// })


// Exercício 10 (Muito Difícil)
// Descrição: Quando o mouse se mover dentro do <div class="area">, altere seu texto para "Movendo!" e mude a cor de fundo do <body> para uma cor de um array de 3 cores, avançando a cada movimento. Após 2 segundos sem movimento, restaure o texto para "Parado" e a cor do <body> para "white".

const area = document.querySelector('.area')
const body = document.body
const cores = ['yellow', 'blue', 'red']
let indice = 0
let timer
area.addEventListener('mousemove', () => {
    area.textContent = 'Movendo!'
    body.style.background = cores[indice]
    indice++
    if(indice === 3) indice = 0
    clearTimeout(timer)
    timer = setTimeout(() => {
        area.textContent = 'Parado'
        body.style.background = 'white'
    }, 2000)
})