// Escreva um algoritmo que leia 2 valores inteiros X e Y calcule a soma dos números que não são múltiplos de 13 entre X e Y, incluindo ambos.
// Entrada
// O arquivo de entrada contém 2 valores inteiros quaisquer, não necessariamente em ordem crescente.
// Saída
// Imprima a soma de todos os valores não divisíveis por 13 entre os dois valores lidos na entrada, inclusive ambos se for o caso.
// Exemplo de saída
// Entrada1: 100
// Entrada2: 200
// Saída: 13954


function funcao(x,y){
    let soma = 0;
    if(x<y){
    for(x; x<=y; x++){
        if(x%13!==0){
        soma = soma+x}
    }
    return soma;}

    if(y<x){
        for(y; y<=x; y++){
            if(y%13!==0){
            soma = soma+y}
        }
        return soma;}
}
console.log(funcao(200,100))