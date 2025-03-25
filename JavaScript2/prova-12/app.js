// Exercício 1 (Muito Fácil)
// Descrição: Dado o array [3, 6, 9, 12, 15], use filter para criar um novo array com apenas os números divisíveis por 3. Exiba o resultado no console.


// const numeros = [3, 6, 9, 12, 15]
// const numDiv3 = numeros.filter(num => num % 3 === 0)
// console.log(numDiv3)

// Exercício 2 (Fácil)
// Descrição: Use map para criar um novo array com cada número do array [2, 4, 6] somado a 10. Exiba o novo array no console.

// const numeros = [2, 4, 6]
// const num10 = numeros.map(num => num + 10)
// console.log(num10)

// Exercício 3 (Fácil)
// Descrição: Use reduce para calcular o produto de todos os números do array [2, 3, 4]. Exiba o resultado no console.

// const numeros = [2, 3, 4]
// console.log(numeros.reduce((accumulator, num)=> accumulator *= num))

// Exercício 4 (Médio)
// Descrição: Dado o array de objetos [{nome: 'Pedro', nota: 8}, {nome: 'Ana', nota: 5}, {nome: 'Lucas', nota: 7}], use filter para criar um novo array com apenas os alunos que têm nota maior ou igual a 7. Exiba o resultado no console.

// const pessoas = [
//     {nome: 'Pedro', nota: 8},
//     {nome: 'Ana', nota: 5},
//     {nome: 'Lucas', nota: 7}
// ]
// const alunosAprov = pessoas.filter(({nota}) => nota >= 7)
// console.log(alunosAprov)

// Exercício 5 (Médio)
// Descrição: Use map para criar um novo array com os nomes do array ['carro', 'moto', 'bike'] concatenados com a palavra "legal". Exiba o novo array no console.

const veiculos = ['carro', 'moto', 'bike']

// const legal = veiculos.map(veiculo => {
//     console.log(veiculo)
//     return veiculo.concat(` legal`)
// })

const legal = veiculos.map(veiculo => veiculo.concat(' legal'))
console.log(legal)

// Exercício 6 (Médio)
// Descrição: Use reduce para contar quantas palavras no array ['sol', 'lua', 'estrela', 'ceu'] têm mais de 3 letras. Exiba o resultado no console.

const ceu = ['sol', 'lua', 'estrela', 'ceu']

// console.log(ceu.reduce((cont) => {
    
//     return ++cont
// }, 0))

console.log(ceu.reduce((cont, palavra) => {return palavra.length > 3 ? ++cont : cont}, 0))



// Exercício 7 (Difícil)
// Descrição: Dado o array de objetos [{item: 'caneta', preco: 2}, {item: 'caderno', preco: 10}, {item: 'borracha', preco: 1}], use filter para selecionar itens com preço menor que 5 e, em seguida, use map para criar um novo array com os nomes desses itens em letras maiúsculas. Exiba o resultado no console.


const objetos = [
    {item: 'caneta', preco: 2},
    {item: 'caderno', preco: 10},
    {item: 'borracha', preco: 1}
]

const objFiltro = objetos.filter( ({preco}) => preco < 5).map(({item}) => item.toUpperCase())

console.log(objFiltro)



// Exercício 8 (Difícil)
// Descrição: Use reduce para criar uma string que concatene todos os valores do array ['a', 'b', 'c'] no formato "Letras: a | b | c". Exiba o resultado no console.

const letras = ['a', 'b', 'c']

const texto = letras.reduce((acc, letra) => acc += letra + ` | `, '')
console.log(`Letras: ${texto}`)



// Exercício 9 (Muito Difícil)
// Descrição: No evento submit do formulário, capture o valor do input e use filter para criar um novo array com apenas os números maiores que o valor digitado a partir do array [10, 20, 30, 40, 50]. Em seguida, use map para triplicar esses números e exiba o resultado no #resultado.


const numeros = [10, 20, 30, 40, 50]
const form = document.querySelector('form')
const resultado = document.querySelector('#resultado')

form.addEventListener('submit', event => {
    event.preventDefault()
    const maiores = numeros.filter(num => num > event.target.input.value).map(num => num*3)
    resultado.textContent = `Resultado: ${maiores}`
})



// Exercício 10 (Muito Difícil)
// Descrição: Crie um array de objetos representando cidades (ex.: [{nome: 'São Paulo', populacao: 12}, {nome: 'Rio', populacao: 6}], em milhões). Use reduce para calcular a população total e exiba o resultado no console.


const cidades = [
    {nome: 'São Paulo', populacao: 12},
    {nome: 'Rio', populacao: 6}
]

console.log(`População total: ${cidades.reduce((acc, {populacao}) => acc += populacao, 0)} milhões`)





