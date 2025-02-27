// Nível 1: Fácil
// Usando function declaration, crie uma função que recebe dois números como parâmetros e retorna a soma deles.
// Previna que os parâmetros recebam undefined.
// Exiba o resultado no console fora da função.

function soma(numA = 0, numB = 0){
return numA + numB
}

console.log(soma(2,4))

// Nível 2: Fácil
// Usando function expression, crie uma função que recebe um número e retorna o dobro dele.
// Previna que o parâmetro receba undefined.
// Exiba o resultado no console fora da função.

const dobrar = function(numA = 0){
return numA*2
}

console.log(dobrar(4))

// Nível 3: Fácil
// Crie uma função que recebe uma string e retorna o número de caracteres dela.
// Previna que o parâmetro receba undefined.
// Exiba a frase "A string tem X caracteres." no console, substituindo "X" pelo valor retornado, sem console.log dentro da função.

function numStr(frase = ``){
return frase.length
}

console.log(`A String tem ${numStr(`abacate`)} caracteres.`)


// Nível 4: Intermediário
// Usando function declaration, crie uma função que recebe um array de números e retorna um novo array com apenas os números pares.
// Previna que o parâmetro receba undefined.
// Exiba o novo array no console fora da função.

const numeros = [1,2,3,4,5,6,7,8,9]
function filtrarPares(nums = []){
let arrayPares = []
for(let i = 0; i < nums.length; i ++){
    if(nums[i] % 2 == 0){
        arrayPares.push(nums[i])
    }
}
return arrayPares.join(`, `)
}

console.log(`Os pares são ${filtrarPares(numeros)}`)


// Nível 5: Intermediário
// Usando function expression, crie uma função que recebe um número e retorna true se ele for maior que 10, ou false caso contrário.
// Use essa função para contar quantos números maiores que 10 existem no array [5, 12, 8, 15, 3].
// Exiba a frase "O array tem X números maiores que 10." no console, substituindo "X" pelo valor correto.

const numeros2 = [5, 12, 8, 15, 3]
let contDez = 0
function maiorQueDez(num = 0){
return num > 10
}

for(let i = 0; i < numeros2.length; i++){
    if(maiorQueDez(numeros2[i]) === true){
        contDez++
    }
}

console.log(`O array tem ${contDez} números maiores que 10.`)


// Nível 6: Intermediário
// Crie uma função que recebe um array de strings e retorna um novo array com as strings que têm mais de 3 caracteres.
// Previna que o parâmetro receba undefined.
// Exiba o novo array no console fora da função.


const palavras = [`Manga`, `Banana`, `Batata`, `Uva`, `Lua`, `Rio`]

function maisQueTres(palavras = []){
    let palavras3 = []
    for(let i = 0; i < palavras.length; i++){
    if(palavras[i].length > 3){
        palavras3.push(palavras[i])
    }
}
    return palavras3
}
console.log(maisQueTres(palavras))


// Nível 7: Avançado
// Usando function declaration, crie uma função que recebe um array de números e retorna a soma de todos os números positivos (maiores que 0).
// Previna que o parâmetro receba undefined.
// Exiba a frase "A soma dos positivos é X." no console, substituindo "X" pelo valor retornado, fora da função.

const numeros4 = [1,-2,3,-4,5,-6,7,-8]

function somaPositivos(numPos = []){
    let soma = 0
    for(let i = 0; i < numPos.length; i++){
        if(numPos[i] > 0){
            soma += numPos[i]
        }
    }
    return soma
}

console.log(`A soma dos positivos é ${somaPositivos(numeros4)}`)


// Nível 8: Avançado
// Usando function expression, crie uma função que recebe um array de strings e retorna um novo array com as strings concatenadas com "!" no final.
// Previna que o parâmetro receba undefined.
// Exiba o novo array no console fora da função.

function adicionaExclama(palavras = []){
let arrayExclamado = []
for(let i = 0; i < palavras.length; i++){
    arrayExclamado.push(palavras[i] + `!`)
}
return arrayExclamado
}

console.log(adicionaExclama([`Arroz`, `com`, `feijão`]))


