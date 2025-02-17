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

const pessoas = personagens.reduce((acc, objeto) => {
    return {
        ...acc,
        [objeto.nome]: {
            idade: objeto.idade
        }
    }
}, {})

console.log(pessoas);
console.log(pessoas.Chika.idade)


const chaves = Object.keys(pessoas)

console.log(chaves)

console.log(Object.keys(personagens[0]))

const listaDeVolta = chaves.map((chave) => ({ nome: chave, idade: pessoas[chave].idade}))

console.log(listaDeVolta)