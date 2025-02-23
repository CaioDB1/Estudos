// Nível 1: Muito Fácil
// Crie um array chamado animais com 3 nomes de animais.
// Use join para exibir os nomes separados por hífen (-).

const animais = ['Cachorro', 'Gato', 'Arara']

console.log(animais.join(`-`))

// Nível 2: Fácil
// Crie um array chamado notas com 6 números (ex.: notas de provas).
// Use filter para criar um novo array com apenas as notas maiores ou iguais a 7.

const notas = [2,4,8,9,3,7]

console.log(notas.filter(notas7 => notas7 >= 7))


// Nível 3: Fácil
// Crie um array chamado cidades com 4 nomes de cidades.
// Use map para criar um novo array com os nomes das cidades em minúsculas.

const cidades = ['Rio Claro', 'Piracicaba', 'Araras', 'São Paulo']

const minCidades = cidades.map(cid => cid.toLowerCase())

console.log(minCidades)

// Nível 4: Intermediário
// Crie um array chamado idades com 5 números representando idades.
// Use sort para ordená-las em ordem decrescente.
// Exiba o array ordenado.

const idades = [50,42,82,12,35]
idades.sort((a, b) => b - a)
console.log(idades)


// Nível 5: Intermediário
// Crie um array chamado frutas com 6 nomes de frutas.
// Use filter para criar um novo array com frutas que começam com a letra "m".
// Use join para exibir essas frutas separadas por vírgulas.

const frutas = ['Maçã', 'Manga', 'Banana', 'Mamão', 'Laranja', 'Abacate']

//let frutasM = frutas.filter(frutasm => frutasm[0] === 'M')

const frutasM = frutas.filter(frutasm => frutasm.startsWith('M'))

console.log(frutasM.join(', ').replace(`, ${frutasM[frutasM.length - 1]}`, ` e ${frutasM[frutasM.length-1]}`))


// Nível 6: Intermediário
// Crie um array chamado valores com 5 números.
// Use map para criar um novo array com cada número dividido por 2.
// Use filter para manter apenas os resultados inteiros (sem casas decimais).

const valores = [52, 78, 25, 46, 33]

const valoresDois = valores.map(val => val/2).filter(val => val % 1 === 0)

console.log(valoresDois)


// Nível 7: Avançado
// Crie um array chamado stringsIdades com 5 strings representando idades (ex.: "20", "15", "30").
// Use map para convertê-las em números.
// Use sort para ordená-las em ordem crescente.
// Use join para exibir os números separados por ponto e vírgula (;).

const stringsIdades = ['36', '12', '50', '24', '48']

// const idadesConvertidas = stringsIdades.map(ida => Number(ida)) 

// console.log(idadesConvertidas)

// const idadesOrdenadas = idadesConvertidas.sort((a, b) => (a - b))

// console.log(idadesOrdenadas.join(';'))

console.log(stringsIdades.map(ida => Number(ida)).sort((a, b) => (a - b)).join('; '))


// Nível 8: Muito Avançado
// Crie um array chamado numerosAleatorios com 6 números.
// Use sort para ordená-los em ordem crescente.
// Use map para criar um novo array com os números ao cubo (elevados a 3).
// Use filter para manter apenas os cubos ímpares.


const numerosAleatorios = [1,8,3,7,9,5]

console.log(numerosAleatorios.sort((a, b) => (a - b)).map(num => num**3).filter(num => num%2 !== 0))