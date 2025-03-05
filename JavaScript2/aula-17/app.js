const title = document.getElementById('title')

console.log(title.outerHTML)

const errors = document.getElementsByClassName('error')
// console.log(errors[1].outerHTML)

// errors.forEach(error => { //errors não é um array nem node list mas sim um HTML collection, que não tem disponivel o método forEach para ser usado
//     console.log(error)
// })

const paragraphs = document.getElementsByTagName('p')
console.log(paragraphs)