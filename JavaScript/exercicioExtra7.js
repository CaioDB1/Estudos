const frutas = ['maçã', 'banana', 'maçã', 'laranja', 'banana', 'maçã'];

const contagemFrutas = frutas.reduce((acc, fruta) => {
  acc[fruta] = (acc[fruta] || 0) + 1; 
  return acc;
}, {});

console.log(contagemFrutas); 

const numeros = [1,8,6,4,5]
let numSoma = 0
const soma = numeros.reduce((acc,numero) => {
    return acc + numero;
}, 0)
const maiorNum = numeros.reduce((acc,maiornumero) => {
    if(acc<maiornumero) return acc = maiornumero
    return acc
}, 0)
const maiorNum1 = numeros.reduce((acc, maiornumero) => 
    (acc < maiornumero) ? maiornumero : acc, 0);  
const maiorNum2 = Math.max(...numeros);


console.log(soma)
console.log(maiorNum)
console.log(maiorNum1)
console.log(maiorNum2)





const numeros1 = [5, 12, 8, 130, 44];

const soma1 = numeros1.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log(soma1); 



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

  const somaIdade = personagens.reduce((acc, personagem) => acc + personagem.idade, 0)
  console.log(somaIdade); 

  const personagensPorIdade = personagens.reduce((grupos, personagem) => {
    if (!grupos[personagem.idade]){
        grupos[personagem.idade] = [];
    }
    grupos[personagem.idade].push(personagem);
    return grupos;
  },{});

  console.log(personagensPorIdade)