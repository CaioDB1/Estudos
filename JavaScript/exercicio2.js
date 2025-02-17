// Leia um valor inteiro X. Em seguida apresente os 6 valores ímpares consecutivos a partir de X, um valor por linha, inclusive o X ser for o caso.
// Entrada
// A entrada será um valor inteiro positivo.
// Saída
// A saída será uma sequência de seis números ímpares.
// Exemplo de EntradaExemplo de Saída
// entrada: 8
// saída:
// 9
// 11
// 13
// 15
// 17
// 19


// function funcao(x){
// for(let i=0; i<6; i++){

//     let resto = x % 2;
//     if(resto===0){
//         i--;
//     }
//     else{
//         console.log(x);
//     }
//     x++;
// }
// }
// funcao(8);




// Solucao extra:
const quantidade = 6;

function numImpares(valor) {
    let contar = 0;
    let novoValor = valor;

    while (contar < quantidade) {
        if (novoValor % 2 !== 0) { 
            console.log(novoValor);
            contar++;
        }
        novoValor++; 
    }
}

numImpares(8);




// //Solução extra:
// let x = 8;
// // Se x for par, ajusta para o próximo ímpar
// if (x % 2 === 0) {
//     x++;
// }
// // Imprime os próximos 6 números ímpares
// for (let i = 0; i < 6; i++) {
//     console.log(x);
//     x += 2; // Pula diretamente para o próximo número ímpar
// }
