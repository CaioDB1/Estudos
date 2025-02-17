const caio = {
    idade: 20,
    peso: 70,
    nome: 'Caio',
    genero: 'Masculino',
    endereco: 'Jardim Floridiana',
    temFilhos: false,
}

const exibirInformacoes = (pessoa, informacao) => {
    console.log(`Nome do ${pessoa.nome}:`, pessoa.nome);
    console.log(`Idade do ${pessoa.nome}:`, pessoa.idade);
    console.log(`Peso do ${pessoa.nome}:`, pessoa.peso);
    console.log(`Endereço do ${pessoa.nome}:`, pessoa.endereco);

    console.log(`${informacao} do ${pessoa.nome}: `, pessoa[informacao])
} 

exibirInformacoes(caio,'genero')