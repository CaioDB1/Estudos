const idade = 8;
const nome = 'Miku'

//let podeEntrar = false;

if(idade >= 18 || nome === 'Miku'){
//if(idade >= 18 && nome === 'Miku'){
    //podeEntrar = true;
    console.log(nome, 'Entrou')
} else {
    console.log(nome, 'nao entrou')
}

//console.log('usuario pode entrar', podeEntrar)


// Comparação com == converte o tipo da variavel assim uma string '5' é igual a uma const 5, no entanto com === isso é levado em conta e são vistos como diferentes