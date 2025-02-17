const numeros = [5, 2, 9, 1, 5, 6];

numeros.sort((a, b) => {
    if(a < b) return -1
    if(a > b) return 1
    return 0
})

numeros.sort((a, b) => a - b); 

console.log(numeros)

const palavras = ["carro", "moto", "bicicleta", "ônibus", "avião"];

palavras.sort((a, b) => a.length - b.length)

console.log(palavras)

const personagens = [
    { nome: "Chika", idade: 17, altura: 157 }, // Kaguya-sama: Love is War
    { nome: "Tohru", idade: 18, altura: 160 }, // Fruits Basket
    { nome: "Nadeshiko", idade: 16, altura: 157 }, // Yuru Camp△
    { nome: "Komi", idade: 16, altura: 168 }, // Komi Can't Communicate
    { nome: "Marin", idade: 16, altura: 165 }, // My Dress-Up Darling
    { nome: "Anya", idade: 6, altura: 95 }, // Spy x Family
    { nome: "Ochaco", idade: 16, altura: 156 }, // My Hero Academia
    { nome: "Taiga", idade: 17, altura: 145 }, // Toradora!
    { nome: "Hinata", idade: 16, altura: 160 }, // Naruto
    { nome: "Nezuko", idade: 14, altura: 153 }, // Demon Slayer
  ];

personagens.sort((a, b) => {
    if(a.idade === b.idade) return a.altura - b.altura
    return a.idade - b.idade;
})
console.log(personagens)

const livros = [
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", anoPublicacao: 1954 },
    { titulo: "O Hobbit", autor: "J.R.R. Tolkien", anoPublicacao: 1937 },
    { titulo: "Duna", autor: "Frank Herbert", anoPublicacao: 1965 },
    { titulo: "Neuromancer", autor: "William Gibson", anoPublicacao: 1984 }];
  livros.sort((a, b) => a.titulo.localeCompare(b.titulo));
  console.log(livros)
  livros.sort((a, b) => a.autor.localeCompare(b.autor))
  console.log(livros)
  livros.sort((a, b) => a.anoPublicacao - b.anoPublicacao)
  console.log(livros)
