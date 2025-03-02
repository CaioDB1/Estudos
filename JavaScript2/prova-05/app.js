// Exercício 1 (Muito Fácil)
// Crie um objeto chamado "book" com as propriedades:
// title (string): o título do livro,
// author (string): o autor do livro,
// pages (number): o número de páginas.
// Exiba o objeto no console.

let book = {
    title: 'Devilman',
    author: 'Go Nagai',
    pages: 1000
}

console.log(book)

// Exercício 2 (Fácil)
// Usando o objeto "book" do Exercício 1, exiba uma mensagem no console no formato:
// "O livro 'TÍTULO' por AUTOR tem PAGES páginas."
// Substitua "TÍTULO", "AUTOR" e "PAGES" pelos valores reais do objeto.

console.log(`O livro ${book.title} por ${book.author} tem ${book.pages} páginas.`)

// Exercício 3 (Fácil)
// Adicione uma propriedade publishedYear (ano de publicação, um número) ao objeto "book".
// Exiba o objeto atualizado no console.

book.publishedYear = 1984
console.log(book)

// Exercício 4 (Fácil)
// Adicione um método chamado summary ao objeto "book" que retorna a string:
// "TÍTULO por AUTOR, publicado em PUBLISHEDYEAR."
// Chame o método e exiba o resultado no console.

book.summary = () => {
    return `${book.title} por ${book.author}, publicado em ${book.publishedYear}.`
}

console.log(book.summary())


// Exercício 6 (Médio)
// Crie uma função que receba um objeto "book" e uma string (um gênero), e adicione essa string a uma propriedade genres do objeto, que deve ser um array.
// Se a propriedade genres não existir, crie-a como um array vazio antes de adicionar o gênero.
// Exiba o objeto atualizado no console.


const func = (book, genero) => {
    if (!book.genres) {
        book.genres = [];
      }
    book.genres = genero
}
func(book, `Aventura`)
console.log(book)


// Exercício 7 (Médio)
// Crie uma função que receba dois objetos, "person1" e "person2", cada um com as propriedades name (string) e age (number).
// A função deve retornar uma string indicando quem é mais velho ou se têm a mesma idade, no formato:
// "NOME1 é mais velho que NOME2." ou "NOME1 e NOME2 têm a mesma idade."
// Exiba o resultado no console.


let person1 = {
    name: 'Jorge',
    age: 29
}
let person2 = {
    name: 'Paulo',
    age: 29
}

const texto = (obj1, obj2) => {
if(obj1.age > obj2.age){return `${obj1.name} é mais velho que ${obj2.name}`}
else if (obj1.age < obj2.age){return `${obj2.name} é mais velho que ${obj1.name}`}
else return `${obj1.name} e ${obj2.name} tem a mesma idade.`
}

console.log(texto(person1, person2))