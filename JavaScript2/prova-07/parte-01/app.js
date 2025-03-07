// Exercício 1 (Fácil)
// Selecione o elemento <h2> da página e altere seu texto para "Bem-vindo ao DOM!".

const h2 = document.querySelector('h2')
h2.textContent = 'Bem-vindo ao DOM'
console.log(h2.textContent)

// Exercício 2 (Fácil)
// Adicione a classe "destaque" ao elemento <p> da página.

const pAddClass = document.querySelector('p')
pAddClass.classList.add('destaque')

// Exercício 3 (Médio)
// Crie uma lista <ul> na página e adicione quatro itens <li> com os nomes de cores: "Vermelho", "Azul", "Verde" e "Amarelo". Cada <li> deve ter a classe "cor".

const cores = ['Vermelho', 'Azul', 'Verde', 'Amarelo' ]
const ul = document.createElement('ul')
document.body.appendChild(ul)
cores.forEach((cor) => {
   li = document.createElement('li')
   li.textContent = cor
   li.classList.add('cor')
   ul.appendChild(li)
})


// Exercício 4 (Médio)
// Selecione todos os elementos <li> com a classe "cor" e altere a cor do texto para corresponder ao nome da cor (ex.: "Vermelho" deve ser vermelho).

const cor = document.querySelectorAll('.cor')
cor[0].style.color = 'red'
cor[1].style.color = 'blue'
cor[2].style.color = 'green'
cor[3].style.color = 'yellow'
