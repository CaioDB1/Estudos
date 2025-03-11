// Exercício 1 (Fácil)
// Descrição: Quando o botão for clicado, exiba a mensagem "Botão Clicado!" no console.

// const botao = document.querySelector('button')
// botao.addEventListener('click', () => {
//     console.log(`Botão CLicado!`)
// })

// Exercício 2 (Fácil)
// Descrição: Quando o <h1> for clicado, altere seu texto para "Título Clicado".

const titulo = document.querySelector('h1')
titulo.addEventListener('click', () => {
    titulo.textContent = `Título Clicado`
})

// Exercício 3 (Fácil)
// Descrição: Quando o botão for clicado, adicione um novo <li> com o texto "Novo Item" à <ul> com classe "lista".

// const lista = document.querySelector('.lista')
// const botao = document.querySelector('button')

// botao.addEventListener('click', () => {
//     lista.innerHTML += `<li>Novo Item</li>`
// })

// Exercício 4 (Médio)
// Descrição: Quando uma <li> for clicada, exiba seu texto no console.

// const li = document.querySelectorAll('li')
// li.forEach((li) => {
//     li.addEventListener('click', () => {
//         console.log(li.textContent)
//     })
// })


// Exercício 5 (Médio)
// Descrição: Quando o botão for clicado, remova o último <li> da <ul> com classe "lista".


// const botao = document.querySelector('button')
// const lista = document.querySelector('.lista')
// const li = document.querySelector('li')
// botao.addEventListener('click', (li) => {
//     let lis = lista.children.length
//     lista.children[lis-1].remove(li)

// })

// Exercício 6 (Médio)
// Descrição: Crie um array com os números [1, 2, 3]. Quando o botão for clicado, adicione cada número como uma <li> dentro da <ul>.

// const numeros = [1, 2, 3]
// const botao = document.querySelector('button')
// const ul = document.querySelector('ul')

// botao.addEventListener('click', () => {
//     numeros.forEach((num) => {
//         ul.innerHTML += `<li>${num}</li>`
//     })
// })

// Exercício 7 (Difícil)
// Descrição: Quando uma <li> for clicada, remova essa <li> específica da <ul>.

const lis = document.querySelectorAll('li')
lis.forEach((li) => {
    li.addEventListener('click', () => {
        li.remove()
    })
})


// Exercício 8 (Difícil)
// Descrição: Quando o botão for clicado, adicione uma nova <li> com o texto "Item Especial" à <ul>, mas apenas se não houver nenhuma <li> com esse texto já presente.

const botao = document.querySelector('button')
const ul = document.querySelector('ul')
botao.addEventListener('click', () => {
    if(!ul.textContent.includes('Item Especial')){
        ul.innerHTML += `<li>Item Especial</li>`
    }
})