const fatorial = (valor) => {
    if(valor === 0 || valor === 1) {
        return 1;
    }
    if(valor < 0){
        return 'Erro'
    }
    return valor * fatorial(valor - 1);
}

const fatorialDeUmAteN = (n,m) => {
    for(n;n<=m;n++){
    console.log(fatorial(n));
    }
}

//fatorialDeUmAteN(0,4);

const fibonacci = (n) => {
    if(n===0) return 0;
    if(n===1) return 1;

    return fibonacci(n-1) + fibonacci(n-2);
}

//console.log(fibonacci(7))

const fatorialM = (n, m) => {
    if (n <= 0) {
        return 1; 
    }
    if (n < m) {
        return 1; 
    }
    return n * fatorialM(n - m, m);
}

//console.log(fatorialM(5, 2));


const arrayRec = (vet, num) => {

    if(num < 0) return 0

    return vet[num] + arrayRec(vet, num - 1)
}

const vet = [1,2,3,4,5,5,50,70]
let num = vet.length - 1;

//console.log(arrayRec(vet, num))



const palavra = 'recursao';
let mensagem = [...palavra]; 
let numP = mensagem.length;  

const inverteString = (mensagem, numP) => {
    if (numP === 0) {  
        return '';
    }
    return mensagem[numP-1] + inverteString(mensagem, numP-1);
};

console.log(inverteString(mensagem, numP));  
