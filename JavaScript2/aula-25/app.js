const botao = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')
// const closeButton = document.querySelector('.popup-close')
botao.addEventListener('click', () => {
    popup.style.display = 'block'
})

// closeButton.addEventListener('click', () => {
//     popup.style.display = 'none'
// })

popup.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const condicoesFechar = ['popup-link', 'popup-close', 'popup-wrapper']

   // const shouldClosePopup = classNameOfClickedElement === 'popup-close' || classNameOfClickedElement === 'popup-link' || classNameOfClickedElement === 'popup-wrapper'

    if(condicoesFechar.some(nomeClasse => nomeClasse === classNameOfClickedElement)){
        // console.log(classNameOfClickedElement)
        popup.style.display = 'none'
    }
    
})