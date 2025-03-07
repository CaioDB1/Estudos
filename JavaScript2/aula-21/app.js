const article = document.querySelector('article')

// console.log(Array.from(article.children))
// console.log(article.children)

// Array.from(article.children).forEach((element) => {
//     element.classList.add('article-element')
// })

const title = document.querySelector('h2')
console.log(title.parentElement.parentElement)
console.log(title.nextElementSibling)
console.log(title.nextElementSibling.previousElementSibling)
console.log(title.previousElementSibling)