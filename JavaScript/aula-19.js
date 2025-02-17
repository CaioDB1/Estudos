function calcular(){
    console.log('calcular');
    console.log(arguments)
}

const calcular2 = function() {
    console.log('calcular 2')
    return 91548;
}

const calcular3 = (funcao) => {
    console.log('calcular3')
    return funcao()
}

calcular(4,3,2,1);
calcular2();
console.log('resultado: ', calcular3(calcular2))