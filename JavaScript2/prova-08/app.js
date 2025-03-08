// Exercício 1 (Fácil)
// Quando o botão for clicado, exiba a mensagem "Clicou!" no console.

// const botao = document.querySelector('button')
// botao.addEventListener('click', () => {
//     console.log('Clicou!')
// })

// Exercício 2 (Fácil)
// Quando o <h1> for clicado, altere seu texto para "Clicado!".

// const h1 = document.querySelector('h1')
// h1.addEventListener('click', () => {
//     h1.textContent = 'Clicado!'
// })

// Exercício 3 (Médio)
// Quando o botão for clicado, adicione um novo <li> com o texto "Item Novo" à <ul> com classe "lista".

// const botao = document.querySelector('button')
// const ul = document.querySelector('ul')

// botao.addEventListener('click', () => {
//     ul.innerHTML += `<li class="lista">Item Novo</li>`
// })

// Exercício 4 (Médio)
// Quando uma <li> for clicada, altere seu texto para "Item Clicado".

// let lis = document.querySelectorAll('li')

// lis.forEach((li) => {
//     li.addEventListener('click', () => {
//         li.textContent = 'Item clicado'
//     })
// })

// Exercício 5 (Médio)
// Quando o botão for clicado, remova todos os <p> dentro do <div> com classe "container".

// const botao = document.querySelector('button')
// //const pis = document.querySelectorAll('p')
// const div = document.querySelector('.container')
// botao.addEventListener('click', () => {
//     div.innerHTML = ''
// })


// Exercício 6 (Difícil)
// Crie um array com os itens ["Maçã", "Banana", "Laranja"]. Quando o botão for clicado, adicione cada item como uma <li> dentro da <ul> com classe "lista".

// const frutas = ["Maçã", "Banana", "Laranja"]
// const botao = document.querySelector('button')
// const lista = document.querySelector('.lista')

// botao.addEventListener('click', () => {
//     frutas.forEach((fruta) => {
//         lista.innerHTML += `<li>${fruta}</li>`
//     })
// })

// Exercício 7 (Difícil)
// Quando uma <li> for clicada, exiba no console o texto completo dessa <li>.

// const lis = document.querySelectorAll('li')
// lis.forEach((li) => {
//     li.addEventListener('click', () => {
//         console.log(li.textContent)
//     })
// })

// Exercício 8 (Muito Difícil)
// Quando o botão for clicado, adicione uma nova <li> com o texto "Único" à <ul>, mas apenas se não houver nenhuma <li> com esse texto já presente.

// const botao = document.querySelector('button')
// const ul = document.querySelector('ul')
// botao.addEventListener('click', () => {
//     if(!ul.innerHTML.includes(`<li>Único</li>`)){
//         ul.innerHTML += `<li>Único</li>`
//     }
// })

// // Exercício 9 (Muito Difícil)
// // Quando o <h1> for clicado, remova todos os elementos dentro do <body>, exceto o próprio <h1>.

// const h1 = document.querySelector('h1')
// h1.addEventListener('click', () => {
//     document.body.innerHTML = ''
// })

// // Exercício 10 (Muito Difícil)
// // Crie um array de objetos com nomes e cores (ex.: [{ nome: 'Rosa', cor: 'pink' }, { nome: 'Azul', cor: 'blue' }]). Quando o botão for clicado, adicione cada objeto como uma <li> no formato "Nome: NOME" dentro da <ul>, e aplique a cor correspondente ao texto da <li>.

// const nomeCor = [
//     {nome: 'Rosa', cor:'pink'},
//     {nome: 'Azul', cor:'blue'}
// ]
// const ul = document.querySelector('ul')
// const botao = document.querySelector('button')
// let li = document.querySelector('li')

// botao.addEventListener('click', () => {
    
//     nomeCor.forEach((nomeCor) => {
//         ul.innerHTML += `<li>Nome: ${nomeCor.nome}</li>`
//         })
//     nomeCor.forEach((li) => {
//          lis.style.color = `${li.cor}`
//         })
// })

