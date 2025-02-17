const numerosAninhados = [[1, 2], [3, 4, 5], [6]];

const numAlinhados = numerosAninhados.flatMap(num => num)

console.log(numAlinhados)

const receitas = [
    { nome: "Bolo de Chocolate", ingredientes: ["farinha", "açúcar", "cacau", "ovos"] },
    { nome: "Pizza", ingredientes: ["farinha", "água", "fermento", "queijo", "molho de tomate"] },
    { nome: "Salada", ingredientes: ["alface", "tomate", "pepino", "cenoura"] }
  ];
  
const juntarIngredientes = receitas.flatMap((objeto) => objeto.ingredientes)

console.log(juntarIngredientes)