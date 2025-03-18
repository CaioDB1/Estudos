const form = document.querySelector('form')
const feedback = document.querySelector('.feedback')

const testUsername = username => /^[a-zA-Z]{6,12}$/.test(username)

form.addEventListener('submit', event => {
    event.preventDefault()

    const username = event.target.username.value
    const isAValidUsername = testUsername(username)
    if(isAValidUsername){
        feedback.textContent = 'Username válido'
        return
    }
    feedback.textContent = 'O username deve conter entre 6 a 12 caracteres e deve conter apenas letras'
})

form.username.addEventListener('keyup', event => {
    const isAValidUsername = testUsername(event.target.value)
    console.log(event)
    if(isAValidUsername){
        // console.log('É válido')
        form.username.setAttribute('class', 'success')
        return
    }
    // console.log('Não é válido')
    form.username.setAttribute('class', 'error')
})