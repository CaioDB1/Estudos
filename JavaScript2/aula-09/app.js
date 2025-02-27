// const double = function (number) {
//     return number * 2
// }


// const double = number => {
//     return number * 2
// }

// const double = number => number * 2


// const result = double(3)
// console.log(`O resultado é: ${result}`)


const nome = 'Roger'
const sayHi = () => `Oi`
const greet = sayHi()

console.log(greet)

const nameInUpperCase = nome.toUpperCase()
console.log(nameInUpperCase)


const myFunc = callback => {
    const value = 77
    callback(value)
}

myFunc(number => {
    console.log(number)
})

const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']

const logArrayInfo = (socialNetworks, index, array) => {
    console.log(index, socialNetworks, array)
}

socialNetworks.forEach(logArrayInfo)

const ul = document.querySelector(`[data-js="ul"]`)

let HTMLTemplate = ''

socialNetworks.forEach(socialNetwork => {
    HTMLTemplate += `<li style="color: deeppink">${socialNetwork}</li>`
})

//console.log(HTMLTemplate)

ul.innerHTML = HTMLTemplate