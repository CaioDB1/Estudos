// const button = document.querySelector('button')

// button.addEventListener('click', () => {
//     console.log('Clicou no botão')
// })

// const ul = document.querySelector('ul')

// ul.remove()

const lis = document.querySelectorAll('li')
let todos = document.querySelector('h1')
todos.innerHTML = 'Nenhum'
// todos = 'Nenhum'
todos.style.color = 'blue'
console.log(todos.innerHTML)
lis.forEach((li) => {
    li.addEventListener('click', event => {
        //console.log(event.target)
        const clickedElement = event.target
        // clickedElement.style.textDecoration = 'line-through'
        clickedElement.remove()
        //console.log(li)
    })
})