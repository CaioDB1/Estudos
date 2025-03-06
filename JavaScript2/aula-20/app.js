const paragraph = document.querySelector('p')
//console.log(paragraph.classList)
//paragraph.classList = 'error'
paragraph.classList.add('error')
paragraph.classList.remove('error')
paragraph.classList.add('success')
//console.log(paragraph.classList)

let texto = document.querySelectorAll('p')

for(let i = 0; i < 8; i++){
    if(texto[i].innerHTML === 'lorem error lorem'){
        texto[i].classList.add('error')
    }
    else if(texto[i].innerHTML === 'lorem ipsum success'){
        texto[i].classList.add('success')
    }
}

texto.forEach((textos) => {
    if(textos.textContent.includes('error')){
                textos.classList.add('error')
            }
    if(textos.textContent.includes('success')){
                textos.classList.add('success')
            }
})

let texto1 = document.querySelector('p')

//texto[3].classList.add('error')
console.log(texto[3])
 
const title = document.querySelector('h1')

title.classList.toggle('test')
title.classList.toggle('test')