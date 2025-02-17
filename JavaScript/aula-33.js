const personagens = [
    { nome: "Chika", idade: 17, altura: 157 }, // Kaguya-sama: Love is War
    { nome: "Tohru", idade: 18, altura: 160 }, // Fruits Basket
    { nome: "Nadeshiko", idade: 16, altura: 157 }, // Yuru Camp△
    { nome: "Komi", idade: 16, altura: 168 }, // Komi Can't Communicate
    { nome: "Marin", idade: 16, altura: 165 }, // My Dress-Up Darling
    { nome: "Anya", idade: 6, altura: 95 }, // Spy x Family
    { nome: "Ochaco", idade: 16, altura: 156 }, // My Hero Academia
    { nome: "Taiga", idade: 17, altura: 145 }, // Toradora!
    { nome: "Reigen", idade: 28, altura: 179}, // Mob Psycho
    { nome: "Hinata", idade: 16, altura: 160 }, // Naruto
    { nome: "Nezuko", idade: 14, altura: 153 }, // Demon Slayer
  ];

const resultadoSome = personagens.some((objeto) => objeto.idade >= 18);
const resultadoEvery = personagens.every((objeto) => objeto.idade >= 18);
console.log(resultadoSome)
console.log(resultadoEvery)