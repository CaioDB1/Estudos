const form = document.querySelector('.signup-form')
// const usernameInput = document.querySelector('#username')

form.addEventListener('submit', event => {
    event.preventDefault()
    // console.log(usernameInput.value)
    // console.log(event.target.input.value)
    console.log(form.username.value)
})

const username = 'rogerm'
const pattern = /^[a-z]{6,}$/

// const isAMatch = pattern.test(username)

// if(isAMatch === true){
//     console.log('O teste da regex passou!')
// } else console.log('O teste da regex não passou')

const result = username.search(pattern)
console.log(result)