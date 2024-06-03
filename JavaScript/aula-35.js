class Pessoa {
    nome;
    idade;
    filhos;

    quantosFilhos() {
        if (this.filhos) {
            return this.filhos.length;
        }
        return 0;
    }




    constructor(nome, idade, filhos) {
        this.nome = nome;
        this.idade = idade;
        this.filhos = filhos;
    }
}

const filho1 = new Pessoa('Jorge', 25);
const filho2 = new Pessoa('Manuel', 15);
const pessoa = new Pessoa('Paulo', 35, [filho1, filho2]);

console.log('Quantos filhos? ', pessoa.quantosFilhos())

console.log(pessoa)