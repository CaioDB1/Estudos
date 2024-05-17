const filmes = [
    { titulo: "O Poderoso Chefão", genero: "Drama", ano: 1972 },
    { titulo: "Pulp Fiction", genero: "Crime", ano: 1994 },
    { titulo: "A Lista de Schindler", genero: "Drama", ano: 1993 },
];

const exibirFilme = (objeto) =>{
    console.log(`Título: ${objeto.titulo}`)
    console.log(`Gênero: ${objeto.genero}`)
    console.log(`Ano: ${objeto.ano}`)
}

//filmes.forEach(exibirFilme)

const numeros = [5, 8, 2, 1, 4, 8, 3, 7, 6, 8];
let num =0;
const contar = (objeto) => {
    if(objeto === 8) num++
}

numeros.forEach(contar)
//console.log(num)


const tarefas = [
    { descricao: "Lavar a louça", concluida: false },
    { descricao: "Estudar para a prova", concluida: false },
    { descricao: "Fazer compras", concluida: true },
];

const marcar = (objeto) => {
    if(objeto.concluida === false) objeto.concluida = true
}

tarefas.forEach(marcar)
console.log(tarefas)
