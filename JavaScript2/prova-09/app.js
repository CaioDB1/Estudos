// Exercício 1 (Muito Fácil)
// Descrição: Quando o botão for clicado, exiba "Ação realizada!" no console.

// const botao = document.querySelector('button')
// botao.addEventListener('click', () => {
//     console.log('Ação realizada!')
// })


// Exercício 2 (Fácil)
// Descrição: Quando o <h2> for clicado, mude seu texto para "Você clicou!".

// const h2 = document.querySelector('h2')
// h2.addEventListener('click', () => {
//     h2.textContent = 'Você clicou!'
// })

// Exercício 3 (Fácil)
// Descrição: Quando um <span> dentro da <div> for clicado, exiba "Span clicado!" no console.

// const span = document.querySelectorAll('span')
// const div = document.querySelector('div')
// const teste = div.children
// console.log(div.children)
// console.log(span)

// span.forEach((span) => {
//     span.addEventListener('click', () => {
//         console.log('Span clicado!')
//     })
// })


// Exercício 4 (Médio)
// Descrição: Quando o botão for clicado, altere a cor de fundo do <div> para "lightblue".

// const botao = document.querySelector('button')
// botao.addEventListener('click', () => {
//     div.style.background = 'lightblue'
// })

// Exercício 5 (Médio)
// Descrição: Quando o mouse passar sobre o <div class="quadrado">, exiba no console "Mouse no quadrado!".

// const quadrado = document.querySelector('.quadrado')
// quadrado.addEventListener('mousemove', () => {
//     console.log('Mouse no quadrado')
// })

//Dá para usar mouseover

// Exercício 6 (Médio)
// Descrição: Quando o texto do <h2> for copiado, exiba "Copiei o título!" no console.

const h2 = document.querySelector('h2')
h2.addEventListener('copy', () => {
    console.log('Copiei o título!')
})

// Exercício 7 (Difícil)
// Descrição: Crie um array com 3 cores (ex.: ['yellow', 'purple', 'pink']). A cada clique no botão, mude a cor de fundo do <div class="quadrado"> para a próxima cor do array.

// const cores = ['yellow', 'purple', 'pink']
// const botao = document.querySelector('button')
// const quadrado = document.querySelector('.quadrado')
// quadrado.style.background = `yellow`

// botao.addEventListener('click', () => {
//         if(quadrado.style.background === `yellow`){
//             quadrado.style.background = `${cores[1]}`
//         } else if(quadrado.style.background === `${cores[1]}`){
//             quadrado.style.background = `${cores[2]}`
//         } else if(quadrado.style.background === `${cores[2]}`){
//             quadrado.style.background = `${cores[0]}`
//         }
// })


// Exercício 8 (Difícil)
// Descrição: Quando um <span> dentro da <div> for clicado, altere o texto do <h2> para "Clicou no span X", onde X é o número do span (1 ou 2).


const div = document.querySelector('div')
//const span = Array.from(div.children)
const span = document.querySelectorAll('span')

// span.forEach((span) => {
//     span.addEventListener('click', () => {
//         console.log(`Clicou no span ${span.textContent.slice(5)}`)
//     })
// })

span.forEach((span, index) => {
    span.addEventListener('click', () => {
        console.log(`Clicou no span ${index+1}`)
    })
});


// Exercício 9 (Muito Difícil)
// Descrição: Quando o botão for clicado, verifique se o array usuarios contém pelo menos um usuário com a profissão "Programador". Exiba no console "Tem Programador!" ou "Não tem Programador!".

const usuarios = [
    { nome: 'João', profissao: 'Médico' },
    { nome: 'Maria', profissao: 'Programador' },
    { nome: 'Pedro', profissao: 'Professor' }
];

const botao = document.querySelector('button')
botao.addEventListener('click', () => {
if(usuarios.some(pessoa => pessoa.profissao === 'Programador')){
    console.log('Tem programador!')
} else console.log('Não tem programador!')
})

// Exercício 10 (Muito Difícil)
// Descrição: Quando o mouse se mover dentro do <div class="quadrado">, altere seu texto para "X: COORDENADA_X | Y: COORDENADA_Y". Quando o mouse sair, restaure o texto original "Quadrado".

// const quadrado = document.querySelector('.quadrado')
// quadrado.addEventListener('mousemove', event => {
//     quadrado.textContent = `X: ${event.offsetX} | Y: ${event.offsetY}`
//     if(event.offsetY >= 149 || event.offsetY === 0 ){
//         quadrado.textContent = 'Quadrado'
//     }
//     if(event.offsetX >= 149 || event.offsetX === 0){
//         quadrado.textContent = 'Quadrado'
//     }
// })


const quadrado = document.querySelector('.quadrado')
quadrado.addEventListener('mousemove', event => {
    quadrado.textContent = `X: ${event.offsetX} | Y: ${event.offsetY}`
})
quadrado.addEventListener('mouseleave', () => {
    quadrado.textContent = 'Quadrado'
})