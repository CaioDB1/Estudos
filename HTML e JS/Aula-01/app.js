const form = document.querySelector('form')
const p = document.querySelector('.p')
const nomeAutorizado = 'Caio'
const regex = /Caio/
form.addEventListener('submit', event => {
    event.preventDefault()
    if(event.target.nome.value === nomeAutorizado){
        p.textContent = 'Caio pode entrar'
    } else p.textContent = 'Nome não autorizado'

})

form.nome.addEventListener('keyup', event => {
    if(regex.test(event.target.value)){
        form.nome.style.backgroundColor = 'green'
    } else form.nome.style.backgroundColor = 'red'
})