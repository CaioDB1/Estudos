// Nível 3: Fácil
// Crie um array chamado comidas com três alimentos.
// Verifique se "pizza" está no array. Se sim, exiba "Pizza está na lista!". Se não, exiba "Pizza não está na lista!".

const alimentos = ['pizza', 'arroz', 'batata']

if(alimentos.includes('pizza') === true){
    console.log(`Pizza está na lista!`)
} else {console.log(`Pizza não está na lista!`)}


// Nível 4: Intermediário
// Armazene o dia atual da semana em uma constante chamada dia (ex.: "segunda", "terça").
// Use condicionais para exibir "Dia útil" (segunda a sexta) ou "Fim de semana" (sábado ou domingo).

const dia = 'quarta'

switch(dia){
    case 'segunda':
    console.log('Dia útil')    
    break
    case 'terça':
    console.log('Dia útil')    
    break
    case 'quarta':
    console.log('Dia útil')    
    break
    case 'quinta':
    console.log('Dia útil')    
    break
    case 'sexta':
    console.log('Dia útil')    
    break
    case 'sabado':
    console.log('Fim de semana')    
    break
    case 'domingo':
    console.log('Fim de semana')    
    break
}

// Nível 5: Intermediário
// Armazene a temperatura atual em uma constante chamada temperatura (ex.: 25).
// Use condicionais para exibir "Frio" (abaixo de 15), "Agradável" (15 a 25) ou "Quente" (acima de 25).

const temperatura = 24

const frio = temperatura < 15
const agradavel = temperatura <= 25 && temperatura >= 15
const quente = temperatura > 25

if(frio){console.log(`Frio`)}
else if(agradavel){console.log(`Agradável`)}
else if(quente){console.log(`Quente`)}


// Nível 6: Intermediário
// Use um loop para criar um novo array chamado maioresQueDez com os números maiores que 10 presentes no array [4, 12, 8, 15, 9, 20].
// Exiba o novo array no console.

const arrayIni = [4, 12, 8, 15, 9, 20]
let maioresQueDez = []
for(let i = 0; i <arrayIni.length; i++){
    if(arrayIni[i]>10){
        maioresQueDez.push(arrayIni[i])
    }
}

console.log(maioresQueDez)


// Nível 7: Avançado
// Armazene um array chamado dadosMisturados com números, strings e booleans.
// Use um loop para contar quantos itens são booleans e quantos são números.
// Exiba a frase: "O array tem [x] booleans e [y] números."

const dadosMisturados = [12, 'batata', true, false, 42, 'trem', 'cavalo', true]
let contNum = 0
let contBool = 0

for(let i = 0; i < dadosMisturados.length; i++){
    switch(typeof dadosMisturados[i]){
        case 'number':{
            contNum++
            continue
        }
        case 'boolean':{
            contBool++
            continue
        }
    }
}

console.log(`O array tem ${contBool} booleans e ${contNum} números`)



// Nível 8: Avançado
// Armazene um array chamado valores com números variados.
// Use loops para criar dois arrays: um com os números positivos e outro com os negativos ou zero.
// Exiba a frase: "Positivos: [lista]. Negativos ou zero: [lista]."

const valores = [-1,1,-2,2,0,-3,3,-10,5]
let positivos = []
let negativos = []

for(let i = 0; i < valores.length; i++){
    switch(valores[i] <=0 ){
        case true:{
            negativos.push(valores[i])
            continue
        }
        case false:{
            positivos.push(valores[i])
            continue
        }
    }
}
const lastPositivo = positivos[positivos.length - 1]
const lastNegativo = negativos[negativos.length - 1]
console.log(`Positivos: ${positivos.join(`, `).replace(`, ${lastPositivo}`, ` e ${lastPositivo}`)}. Negativos ou zero: ${negativos.join(`, `).replace(`, ${lastNegativo}`, ` e ${lastNegativo}`)}.`)

// Nível 9: Muito Avançado
// Armazene um array de objetos com informações de produtos (nome e preço).
// Filtre os produtos com preço maior que 50.
// Ordene os nomes dos produtos filtrados em ordem alfabética.
// Exiba os nomes ordenados.

const produtos = [[`arroz`, 10], [`feijao`, 60], [`leite`, 6], [`cafe`, 55]]

const produtosFiltrados = produtos.filter(produto => produto[1] > 50)

const nomesFiltrados = produtosFiltrados.map(produto => produto[0])

const nomesOrdenados = nomesFiltrados.sort()

console.log(nomesOrdenados)


// Nível 10: Muito Difícil
// Armazene um array de números chamado numerosDiversos.
// Use loops para calcular o produto dos números maiores que 5 e a soma dos números menores ou iguais a 5.
// Exiba a frase: "Produto dos maiores que 5: [x]. Soma dos menores ou iguais a 5: [y]."

const numerosDiversos = [2,4,3,6,10]

let prodMaior5 = 1
let somaMenor5 = 0

for(let i = 0; i < numerosDiversos.length; i++){
    switch(numerosDiversos[i]>5){
        case true:{
            prodMaior5 *= numerosDiversos[i]
            continue
        }
        case false:{
            somaMenor5 += numerosDiversos[i]
        }
    }
}

console.log(`Produto dos maiores que 5: ${prodMaior5}. Soma dos menores ou iguais a 5: ${somaMenor5}`)