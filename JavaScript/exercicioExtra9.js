const notas = [5.5, 8.0, 6.7, 9.2, 4.8];

const notasSome = notas.some((objeto) => objeto > 7)
console.log(`Tem alguma nota de aluno maior que 7: ${notasSome}`)

const produtos = [
    { nome: "Camiseta", emEstoque: true },
    { nome: "Calça Jeans", emEstoque: false },
    { nome: "Tênis", emEstoque: true }
  ];

const produtosEvery = produtos.every((objeto) => objeto.emEstoque === true)
console.log(`Todos os produtos estão em estoque: ${produtosEvery}`)

const palavras = ["casa", "carro", "sol", "lua", "arvore"];

const palavrasSome = palavras.some((objeto) => objeto.includes('a'))

console.log(`Existe pelo menos uma palavra com a letra a: ${palavrasSome}`)
