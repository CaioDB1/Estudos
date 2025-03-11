const paragraph = document.querySelector('.copy-me')



paragraph.addEventListener('copy', () => {
    console.log('Texto copiado!')
})

const div = document.querySelector('.box')

div.addEventListener('mousemove', (event) => {
    div.textContent = `A posição do mouse é X: ${event.offsetX} e Y: ${event.offsetY}`
})

document.addEventListener('wheel', event => {
    console.log(event.pageX, event.pageY)
})