const produtos = [
    { nome: "Camiseta", preco: 25.99, categoria: "Roupas" },
    { nome: "Tênis", preco: 89.90, categoria: "Calçados" },
    { nome: "Mochila", preco: 54.99, categoria: "Acessórios" },
    { nome: "Calça Jeans", preco: 49.99, categoria: "Roupas" },
];

const filtrarProdutos = (produtos) => produtos.categoria === 'Roupas'

const produtosFiltrados = produtos.filter(filtrarProdutos)

console.log(produtosFiltrados)

let valorT = 0
const somarPreco = (objeto) => {
    valorT = valorT + objeto.preco
}

produtos.forEach(somarPreco)

console.log(valorT)


const pessoas = [
    { nome: "Ana", idade: 28, cidade: "São Paulo" },
    { nome: "Bruno", idade: 35, cidade: "Rio de Janeiro" },
    { nome: "Carla", idade: 22, cidade: "São Paulo" },
    { nome: "Daniel", idade: 45, cidade: "Belo Horizonte" },
];

const filtrarPessoas = (pessoas) => pessoas.idade >= 30

const pessoasFiltradas = pessoas.filter(filtrarPessoas)

console.log(pessoasFiltradas)


const livros = [
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954, disponivel: true },
    { titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling", ano: 1997, disponivel: false },
    { titulo: "O Código Da Vinci", autor: "Dan Brown", ano: 2003, disponivel: true },
];

const filtrarLivros = (livros) => livros.ano < 2000 && livros.disponivel === true

const livrosFiltrados = livros.filter(filtrarLivros)

console.log(livrosFiltrados)
