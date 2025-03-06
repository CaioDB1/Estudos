// Exercício 1 (Fácil)
// Crie uma função chamada createDog que retorna um objeto com as propriedades name e breed, usando os parâmetros passados para a função.
// Exiba o objeto no console.

const createDog = (name, breed) => {
    return {name, breed}
}

const dog = createDog('Alex', 'Vira-lata')

console.log(dog)


// Exercício 2 (Fácil)
// Crie um objeto chamado phone com as propriedades brand, model, e price.
// Acesse e exiba no console o modelo e o preço do telefone.

let phone = {
    brand: 'Samsung',
    model: 'S8',
    price: 1999
}

console.log(`Modelo: ${phone.model}, Preço: R$ ${phone.price}`)

// Exercício 3 (Médio)
// Crie uma função chamada getStudentInfo que recebe um objeto com name e grade e retorna uma string no formato: "NOME - Nota: NOTA".
// Use o objeto { name: 'Julia', grade: 8.5 } e exiba a string no console.


let aluno = {name: 'Caio', grade: 8.5}
const getStudentInfo = (aluno) => {
    return `${aluno.name} - Nota: ${aluno.grade}`
}

const Caio = getStudentInfo(aluno)

console.log(Caio)

// Exercício 4 (Médio)
// Crie uma função chamada increasePrice que recebe um objeto de produto com name e price e aumenta o preço em 10%.
// Use o objeto { name: 'Camiseta', price: 50 }, aplique o aumento e exiba o objeto atualizado.

let produto = {
    name: 'Camiseta',
    price: 50
}

const increasePrice = (produto) => {
    produto.price *= 1.1
}

increasePrice(produto)

console.log(produto)

// Exercício 5 (Médio)
// Crie uma função chamada isAdult que recebe um objeto com name e age e retorna true se a idade for maior ou igual a 18, ou false caso contrário.
// Use o objeto { name: 'Pedro', age: 16 } e exiba o resultado no console.

let pessoa = {
    name: 'Pedro',
    age: 16
}

const isAdult = (pessoa) => {
    if(pessoa.age >= 18){
        return true
    } else return false
}

console.log(`A pessoa tem 18 anos ou mais: ${isAdult(pessoa)}
`)

// Exercício 6 (Difícil)
// Crie uma função chamada getMovieDetails que recebe um objeto de filme com title, director, e duration (em minutos) e retorna uma string no formato: "TÍTULO, dirigido por DIRETOR, dura DURAÇÃO minutos".
// Use o objeto { title: 'Inception', director: 'Christopher Nolan', duration: 148 } e exiba a string no console.

let filme = {
    titulo: 'Inception',
    diretor: 'Christopher Nolan',
    duracao: 148
}

const getMovieDetails = (filme) => {
return `${filme.titulo}, dirigido por ${filme.diretor}, dura ${filme.duracao} minutos.`
}
console.log(getMovieDetails(filme))

// Exercício 7 (Difícil)
// Crie uma função chamada addHobby que recebe um objeto de pessoa com uma propriedade hobbies (um array) e um novo hobby, e adiciona o hobby ao array.
// Use o objeto { name: 'Luana', hobbies: ['leitura', 'corrida'] }, adicione 'pintura' e exiba o array de hobbies atualizado.

let pessoa1 = {
    name: 'Caio',
    hobbies: ['go', 'mangás']
}

const addHobby = (pessoa, novoHob) => {
    pessoa.hobbies.push(novoHob)
}

addHobby(pessoa1, 'corrida')

console.log(pessoa1['hobbies'])


// Exercício 8 (Muito Difícil)
// Crie uma função chamada getTotalValue que recebe um array de objetos de itens, cada um com name e value, e retorna o valor total somado.
// Use o array [{ name: 'Caneta', value: 2 }, { name: 'Caderno', value: 10 }, { name: 'Borracha', value: 1 }] e exiba o valor total.

let itens = [
    {name: 'Caneta', value:2},
    {name: 'Caderno', value: 10},
    {name: 'Borracha', value: 1}
]
const getTotalValue = (itens) => {
    let soma = 0
    itens.forEach(itens => {
        soma += itens.value
    });
    return soma
}

console.log(getTotalValue(itens))

// Exercício 9 (Muito Difícil)
// Crie uma função chamada getMostExpensive que recebe um array de objetos de produtos, cada um com name e price, e retorna o objeto do produto mais caro.
// Use o array [{ name: 'TV', price: 2000 }, { name: 'Mouse', price: 50 }, { name: 'Teclado', price: 100 }] e exiba o produto mais caro.

let produtos = [
    {name: 'TV', price: 2000},
    {name: 'Mouse', price: 50},
    {name: 'Teclado', price: 100}
]
const getMostExpensive = (produtos) => {
let maisCaro = produtos[0]
    produtos.forEach(produto => {
        if(produto.price>maisCaro.price){
            maisCaro = produto
        }
    })
return maisCaro
}
console.log(getMostExpensive(produtos))


// Exercício 10 (Muito Difícil)
// Crie uma função chamada mergeProfiles que recebe dois objetos de pessoa, cada um com name e skills (um array), e retorna um novo objeto com o nome do primeiro e a união das skills de ambos.
// Use os objetos { name: 'Rafael', skills: ['JavaScript', 'HTML'] } e { name: 'Sofia', skills: ['CSS', 'Python'] }, e exiba o novo objeto.

const mergeProfiles = (pessoa1, pessoa2) => {
    let novaPessoa = {
        name: pessoa1.name,
        skills: [...pessoa1.skills, ...pessoa2.skills]
     }
    return novaPessoa
}
let pessoa2 = {name: 'Rafael', skills: ['JavaScript', 'HTML']}
let pessoa3 = {name: 'Sofia', skills: ['CSS', 'Python']}

console.log(mergeProfiles(pessoa2, pessoa3))