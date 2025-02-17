const idade = 14;

const exibirIdade = () => {
    const idade = 23;
    console.log(idade);
}

const exibirIdade2 = () => {
    exibirIdade();
    console.log(idade)
}

exibirIdade2();