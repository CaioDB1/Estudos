const lista = [
    {
        nome: 'Moises',
        idade: 42,
    },
    {
        nome: 'Nicodemos',
        idade: 42,
    },
    {
        nome: 'Tomé',
        idade: 42,
    },
    {
        nome: 'Mateus',
        idade: 42,
    },
    {
        nome: 'Simão',
        idade: 42,
    },
]


for(let i = 0; i < lista.length; i++){
    console.log(lista[i])
}


let soma = 0;

const somaIdade = (objeto) => {
    soma += objeto.idade
    console.log(objeto)
}

lista.forEach(somaIdade);
console.log('Soma: ', soma)