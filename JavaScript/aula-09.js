

function soma(item1, item2){
    return item1 + item2;
}

function subtrair(item1, item2){
    return item1 - item2;
}

function funcao(item1, item2){
    return soma(item1,item2)*subtrair(item1,item2);
}



console.log('Soma: ', soma(5,6))
console.log('Subtracao: ', subtrair(5,6))
console.log('Multiplicacao dos resultados: ', funcao(5,6))