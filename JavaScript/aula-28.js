const lista = [
    {
        nome: 'Moises',
        idade: 36,
        exibir: true
    },
    {
        nome: 'Nicodemos',
        idade: 42,
    },
    {
        nome: 'Tomé',
        idade: 19,
    },
    {
        nome: 'Mateus',
        idade: 15,
    },
    {
        nome: 'Simão',
        idade: 42,
        exibir: true
    },
]

const filtrarPessoa = (pessoa) => !!pessoa.exibir === true && pessoa.idade > 40

const listaFiltrada = lista.filter((filtrarPessoa))

console.log(lista)
console.log(listaFiltrada)