const produtos = [
    { nome: "Camiseta", preco: 25.99, categoria: "Roupas" },
    { nome: "Tênis", preco: 89.90, categoria: "Calçados" },
    { nome: "Mochila", preco: 54.99, categoria: "Acessórios" },
];

//console.log(produtos.map((objeto) => objeto.nome))



const pessoas = [
    { nome: "Ana", sobrenome:"Amoedo", idade: 28 },
    { nome: "Bruno", sobrenome:"Banner", idade: 35 },
    { nome: "Carla", sobrenome:"Cardoso", idade: 22 },
];

const converterObjeto = (objeto1) => {
    return {
        nomeCompleto: `${objeto1.nome} ${objeto1.sobrenome}`,
        Idade: `${objeto1.idade}`
    }
}

//console.log(pessoas.map(converterObjeto))


const converterObjeto2 = (objeto2) => {
    return {
        ValorPedido: objeto2.quantidade*objeto2.precoUnitario,
    }
}

const pedidos = [
    { produto: "Camiseta", quantidade: 2, precoUnitario: 25.99 },
    { produto: "Tênis", quantidade: 1, precoUnitario: 89.90 },
    { produto: "Mochila", quantidade: 1, precoUnitario: 54.99 },
];

let vetValor = pedidos.map(converterObjeto2)

console.log(vetValor)