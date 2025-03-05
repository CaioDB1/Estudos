const paragraph = document.querySelector('.error')

console.log(paragraph.innerHTML)
console.log(paragraph.outerHTML)
console.log(paragraph)

const errorDiv = document.querySelector('div.error')

console.log(errorDiv.innerHTML)
console.log(errorDiv.outerHTML)
console.log(errorDiv)


const h1 = document.querySelector('body > h1')

console.log(h1.innerHTML)
console.log(h1.outerHTML)
console.log(h1)

const paragraphs1 = document.querySelectorAll('p')

console.log(paragraphs1[0].outerHTML)

paragraphs1.forEach((paragraph) => {
    console.log(paragraph.outerHTML)
})

const errors = document.querySelectorAll('.error')
console.log(errors)