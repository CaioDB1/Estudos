// const button = document.querySelector('button')

// button.addEventListener('click', () => {
//     console.log('Clicou no botão')
// })

const ul = document.querySelector('ul')

// ul.remove()

const lis = document.querySelectorAll('li')
let todos = document.querySelector('h1')
//todos.innerHTML = 'Nenhum'
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

const button = document.querySelector('button')

button.addEventListener('click', () => {
    //ul.innerHTML += '<li>Novo Item</li>'
    const li = document.createElement('li')
    li.textContent = 'Novo item'
    //console.log(li)
    //ul.append(li)
    ul.prepend(li)
})