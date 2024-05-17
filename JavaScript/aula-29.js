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

const novaPessoa = lista.find((pessoa) => pessoa.idade > 30)
const novaPessoa1 = lista.find((pessoa) => pessoa.nome === 'Mateus')
console.log(novaPessoa)
console.log(novaPessoa1)