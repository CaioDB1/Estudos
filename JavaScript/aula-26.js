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

console.log(lista.map((objeto) => objeto.nome ));


const converterObjeto = (objeto) => {
    return {
        ...objeto,
        nomeIdade: `${objeto.nome} + ${objeto.idade}`
    }
}

//console.log(lista.map(converterObjeto))