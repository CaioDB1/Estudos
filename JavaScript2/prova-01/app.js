// Nível 1: Muito Fácil
// Armazene seu animal favorito em uma constante chamada animalFavorito.
// Exiba no console a frase: "Meu animal favorito é: [animal]."

const animalFavorito = 'Cavalo-marinho'
console.log(`Meu animal favorito é: ${animalFavorito}`)

// Nível 2: Fácil
// Armazene dois números em constantes chamadas numero1 e numero2.
// Armazene a soma deles em uma constante chamada somaNumeros.
// Exiba no console a frase: "A soma é: [soma]."

const numero1 = 2
const numero2 = 4
const somaNumeros = numero1 + numero2
console.log(`A soma é: ${somaNumeros}.`)

// Nível 3: Fácil
// Armazene seus três livros favoritos em um array chamado meusLivros.
// Exiba no console a frase: "Meus livros favoritos são: [livro1], [livro2] e [livro3].", usando o método join() para evitar acessar os índices diretamente.

const meusLivros = ['Nagatoro', 'One Punch Man', 'Revolução dos bichos']
console.log(`Meus livros favoritos são: ${meusLivros.join(', ').replace(`, ${meusLivros[meusLivros.length - 1]}`, ` e ${meusLivros[meusLivros.length - 1]}`)}`)


// Nível 4: Intermediário
// Armazene um array com quatro cores em uma constante chamada cores.
// Exiba no console um boolean que indica se o array tem mais de três itens.
// Exiba também a terceira cor do array.


const cores = ['verde', 'azul', 'roxo', 'vermelho']
let mais3Itens = null
if(cores.length > 3){mais3Itens = true}
console.log(`Tem mais de 3 cores: ${mais3Itens}`)
console.log(cores.length > 3);
console.log(`A terceira cor é: ${cores[2]}`)


// Nível 5: Intermediário
// Armazene uma frase em uma constante chamada minhaFrase.
// Exiba no console o tipo de dado da frase usando typeof.
// Exiba a frase: "A frase tem [x] caracteres.", substituindo [x] pelo número correto.


const minhaFrase = `Tenho que estudar mais`
console.log(typeof minhaFrase)
console.log(`A frase tem ${minhaFrase.length} caracteres.`)


// Nível 6: Intermediário
// Armazene um array com os valores false, 0, null e "texto" em uma constante chamada valoresMisturados.
// Exiba no console um boolean indicando se o valor "texto" está no array usando includes().
// Exiba a quantidade de itens no array.


const valoresMisturados = [false, 0, null, 'texto']
console.log(valoresMisturados.includes('texto'))
console.log(valoresMisturados.length)


// Nível 7: Avançado
// Armazene três números em um array chamado numerosAleatorios.
// Armazene o resultado da multiplicação do segundo e terceiro números em uma constante chamada multiplicacao.
// Exiba no console a frase: "O resultado é maior que 20? [boolean].", substituindo [boolean] pelo valor correto.


const numerosAleatorios = [4, 2, 5]
const multiplicacao = numerosAleatorios[1] * numerosAleatorios[2]
console.log(`O resultado é maior que 20? ${multiplicacao>20}.`)


// Nível 8: Avançado
// Armazene um array com cinco números em uma constante chamada valores.
// Some o primeiro e o último número e armazene o resultado em uma constante chamada somaExtremos.
// Exiba no console a frase: "A soma é par? [boolean].", substituindo [boolean] por true ou false.


const valores = [2, 4, 6, 8, 10]
const somaExtremos = valores[0] + valores[valores.length-1]
console.log(somaExtremos)
console.log(`A soma é par? ${somaExtremos % 2 === 0}`)


// Nível 9: Muito Avançado
// Armazene uma lista de cinco nomes em um array chamado nomes.
// Filtre os nomes que têm mais de quatro letras e armazene-os em um novo array chamado nomesLongos.
// Exiba no console a frase: "Nomes com mais de 4 letras: [lista].", substituindo [lista] pelos nomes filtrados.


const nomes = ['Paulo', 'Jorge', 'Claudio', 'Fernando', 'João']
let nomesLongos = []
for(let i = 0; i<nomes.length; i++){
    if(nomes[i].length>4){
        nomesLongos.push(nomes[i])
    }
}
console.log(`Nomes com mais de 4 letras: ${nomesLongos.join(', ').replace(`, ${nomesLongos[nomesLongos.length - 1]}`, ` e ${nomesLongos[nomesLongos.length - 1]}`)}`)

// Nível 10: Muito Difícil
// Armazene uma lista de objetos representando pessoas, cada uma com nome e nota (um número entre 0 e 10), em uma constante chamada alunos.
// Filtre os alunos com nota maior que 7.
// Ordene os alunos filtrados por nota em ordem decrescente.
// Exiba no console a frase: "Alunos aprovados: [nomes].", substituindo [nomes] pelos nomes dos alunos aprovados.


const alunos = [['Caio', 8], ['Jorge', 5], ['Maria', 9], ['Pedro', 6]]

let alunosAprov = []

for(let i = 0; i<alunos.length; i++){
    if(alunos[i][1]>7){
        alunosAprov.push(alunos[i])
    }
}

console.log(`Alunos aprovados: ${alunosAprov[0][0]} e ${alunosAprov[1][0]}`)