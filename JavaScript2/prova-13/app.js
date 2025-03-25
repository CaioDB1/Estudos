// Nível 1: Fácil
// Ordene o array de strings cidades = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte'] em ordem alfabética.
// Não modifique o array original.
// Exiba o array ordenado no console.

const cidades = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte']
const cidadesCopy = cidades.map(cidade => cidade)
const cidadesOrdenadas = cidadesCopy.sort()
console.log(cidadesOrdenadas)
console.log(cidades)


// Nível 2: Fácil
// Ordene o array de números valores = [10, 4, 7, 1, 9] em ordem crescente.
// Não modifique o array original.
// Exiba o array ordenado no console.

// const numeros = [10, 4, 7, 1, 9]
// const numerosCopy = numeros.map(num => num)
// const numerosOrdenados = numerosCopy.sort((num1, num2) => num1 - num2)
// console.log(numerosOrdenados)
// console.log(numeros)

// Nível 3: Intermediário
// Encontre o primeiro número maior que 20 no array numeros = [5, 18, 25, 12, 30].
// Exiba esse número no console.

// const numeros = [5, 18, 25, 12, 30]
// // const maiorVinte = numeros.filter(num => num > 20)
// // console.log(maiorVinte[0])
// const maiorVinte = numeros.find(num => num > 20)
// console.log(maiorVinte)


// Nível 4: Intermediário
// Ordene o array de strings animais = ['gato', 'cachorro', 'pássaro'] em ordem alfabética invertida (Z-A).
// Não modifique o array original.
// Exiba o array ordenado no console.

const animais = ['gato', 'cachorro', 'pássaro']
const animaisCopy = animais.sort()
const animaisOrdenados = animaisCopy.reverse()
console.log(animaisOrdenados)


// Nível 5: Intermediário
// Gere uma string a partir do array itens = ['pão', 'leite', 'café'] no formato "pão comprado, leite comprado, café comprado".
// Exiba a string no console.

const itens = ['pão', 'leite', 'café']
// const itensComprados = itens.reduce((acc, item) => {
//    return acc += `${item} comprado, `
// }, '')
// console.log(itensComprados.replace(`${itens[itens.length-1]} comprado,`, `${itens[itens.length-1]} comprado`))


const itensComprados = itens.reduce((acc, item, index) => {
    return index === itens.length - 1 ? acc += `${item} comprado` : acc += `${item} comprado, `
}, ``)

console.log(itensComprados)

// Nível 6: Avançado
// Calcule a soma dos números ímpares no array numeros = [1, 2, 3, 4, 5] usando filter e reduce.
// Exiba a soma no console.

// const numeros = [1, 2, 3, 4, 5]
// const numerosImpares = numeros.map(num => num).filter(num => num % 2 !== 0)
// const numSoma = numerosImpares.reduce((acc, num) => {
//     return acc + num
// }, 0)
// console.log(numSoma)

// Nível 7: Avançado
// Crie um novo array a partir de alunos = [{ nome: 'João', nota: 85 }, { nome: 'Maria', nota: 92 }] contendo apenas os nomes dos alunos com nota maior que 90.
// Exiba o novo array no console.

const alunos = [
    { nome: 'João', nota: 85 },
    { nome: 'Maria', nota: 92 }
]

const alunoMais90 = alunos.filter(({nota}) => nota > 90).map(({nome}) => nome)

console.log(alunos)
console.log(alunoMais90)


// Nível 8: Muito Avançado
// Ordene o array de objetos livros = [{ titulo: 'Livro A', paginas: 300 }, { titulo: 'Livro B', paginas: 150 }, { titulo: 'Livro C', paginas: 200 }] por número de páginas em ordem decrescente.
// Não modifique o array original.
// Exiba o array ordenado no console.


const livros = [
    { titulo: 'Livro A', paginas: 300 },
    { titulo: 'Livro B', paginas: 150 },
    { titulo: 'Livro C', paginas: 200 }
]

const livrosOrdenados = livros.map(livro => livro).sort((livro1, livro2) => livro2.paginas - livro1.paginas)

console.log(livros)
console.log(livrosOrdenados)


// Nível 9: Muito Avançado
// Use reduce para contar quantas vezes cada número aparece no array numeros = [1, 2, 2, 3, 1, 4].
// Exiba o resultado como um objeto no console.

const numeros = [1, 2, 2, 3, 1, 4]
const qtdNum = numeros.reduce((acc, num) => {

    acc[num] = (acc[num] || 0) + 1
    return acc
}, {})

console.log(qtdNum)


// Nível 10: Muito Difícil
// Crie um novo array a partir de veiculos = [{ modelo: 'Carro A', tipo: 'Carro', velocidade: 120 }, { modelo: 'Moto B', tipo: 'Moto', velocidade: 80 }] com a velocidade ajustada: multiplique por 1.5 para carros e por 2 para motos.
// Exiba o novo array no console.

const veiculos = [{ modelo: 'Carro A', tipo: 'Carro', velocidade: 120 }, { modelo: 'Moto B', tipo: 'Moto', velocidade: 80 }]
const veloAjust = veiculos.map(({modelo, tipo, velocidade}) => {
    // if(tipo === 'Moto') return ({modelo, tipo, velocidade: velocidade*2})
    //     else return ({modelo, tipo, velocidade: velocidade*1.5})
    return tipo === 'Moto' ? ({modelo, tipo, velocidade: velocidade*2}) : ({modelo, tipo, velocidade: velocidade*1.5})
})
console.log(veloAjust)