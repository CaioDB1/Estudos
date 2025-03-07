// Exercício 1 (Fácil)
// Faça com que o texto de um <p> na página seja exibido em letras minúsculas, independentemente de como foi escrito no HTML.

const p = document.querySelector('p')
console.log(p.textContent.toLowerCase())
p.textContent = p.textContent.toLowerCase()

// Exercício 2 (Fácil)
// Adicione a classe "highlight" a um elemento <div> na página e exiba o elemento no console.

const div = document.querySelector('div')
div.classList.add('highlight')
console.log(div.outerHTML)


// Exercício 3 (Médio)
// Crie uma lista de frutas em uma <ul> vazia na página, usando o array ['Maçã', 'Banana', 'Laranja']. Cada fruta deve estar em um <li> com a classe "fruit".

// const frutas = ['Maçã', 'Banana', 'Laranja']
// const ul = document.querySelector('ul')
// frutas.forEach((fruta) => {
// ul.innerHTML += `<li class="fruit">${fruta}</li>`
// })


// Exercício 4 (Médio)
// Altere a cor do texto de todos os elementos com a classe "fruit" para "green".

const fruits = document.querySelectorAll('.fruit')

fruits.forEach((fruta) => {
    fruta.style.color = 'green'
})


// Exercício 5 (Médio)
// Adicione o atributo title com o valor "Clique aqui" a um botão (<button>) na página e exiba o botão no console.

const botao = document.querySelector('button')
botao.setAttribute('title', 'Clique aqui')
console.log(botao.outerHTML)


// Exercício 6 (Difícil)
// Crie uma lista de números em uma <ul> vazia usando o array [10, 15, 20, 25, 30]. Cada número deve estar em um <li> com a classe "num". Se o número for maior que 20, aplique a cor "red", caso contrário, aplique "blue".

// const numeros = [10, 15, 20, 25, 30]
// const ul = document.querySelector('ul')

// numeros.forEach((num) => {
//     if(num>20){ ul.innerHTML += `<li class = "num" style = "color: red">${num}</li>`} 
//     else { ul.innerHTML += `<li style = "color: blue">${num}</li>`}     
// })

// Exercício 7 (Muito Difícil)
// Adicione uma lista de nomes em uma <ul> vazia usando o array ['Ana', 'Bruno', 'Clara']. Cada nome deve estar em um <li> com a classe "name". Se o nome tiver mais de 4 letras, adicione a classe "long-name" ao <li> correspondente.

// const nomes = ['Ana', 'Bruno', 'Clara']
// const ul = document.querySelector('ul')
// nomes.forEach((nome) => {
//     ul.innerHTML += `<li class = "name">${nome}</li>`
// })
// const nomes2 = document.querySelectorAll('.name')
// nomes2.forEach(nome => {
//     if(nome.textContent.length > 4){
//         nome.classList.add('long-name')
//     }
// })

// Exercício 9 (Muito Difícil)
// Pegue todos os elementos <p> da página e, para cada um, altere o texto para maiúsculas e adicione a classe "uppercase". Exiba no console as propriedades de estilo de um dos parágrafos.

const text = document.querySelectorAll('p')

text.forEach((texto) => {
texto.textContent = texto.textContent.toUpperCase()
texto.classList.add('uppercase')
})
console.log(text[0].style)


// Exercício 10 (Muito Difícil)
// Crie uma lista de produtos em uma <ul> vazia usando o array [{ name: 'Caneta', price: 2 }, { name: 'Caderno', price: 10 }]. Cada produto deve estar em um <li> com a classe "product" no formato "NOME - R$ PREÇO". Se o preço for maior que 5, aplique a cor "orange" e remova a classe "product" do <li>.

const produtos = [
    {name: 'Caneta', price: 2},
    {name: 'Caderno', price: 10}
]
const ul = document.querySelector('ul')
produtos.forEach((produto) => {
    ul.innerHTML += `<li class = "product">${produto.name} - R$ ${produto.price}</li>`
})
const maisCinco = document.querySelectorAll('.product')
maisCinco.forEach((produto) => {
    if(produto.textContent.split('R$ ')[1] > 5){
        produto.style.color = 'orange'
        produto.classList.remove('product')
    }
})
