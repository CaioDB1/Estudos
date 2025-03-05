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