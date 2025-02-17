// Matheus estava conversando com a sua noiva via mensagem de texto, quando ela lhe enviou a seguinte mensagem:
// 1-4-3
// Ele não entendeu a mensagem, então ele perguntou o que isso significava, e ela respondeu que era 'I Love You" e logo ele percebeu que cada número separado por um ' - ' é a quantidade de caracteres de cada uma das palavras que compõem a frase. Com isso, ele teve a ideia de criar um programa que inserindo determinada frase, ele calcula a quantidade de caracteres de cada uma das palavras e separa os valores por ' - '. Mas ele ainda teve a ideia de que o programa deveria receber várias frases linha por linha e ainda no final da execução do programa, a palavra com a maior quantidade de letras deveria ser exibida.
// Entrada
// A entrada consiste de vários casos de teste. A primeira linha de um caso de teste contém uma 1 ≤ String ≤ 100 com uma única palavra ou um conjunto de palavras que formam uma frase. Os casos de teste serão processados quando o número 0 for recebido. Não pode haver mais que um espaço separando cada palavra.
// Saída
// Para cada caso de teste, exiba o número de caracteres de cada palavra que compõe a frase recebida. Separe a quantidade de caracteres de cada palavra por um ' - '. Exiba também a palavra com a maior quantidade de caracteres de todas as frases recebidas.
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(data){
    console.log('Voce digitou:' + data);
    console.log('Digite novamente');
    
    if(data == 0) {
        process.stdin.pause();
    }
})

const mensagem = 'i love you squirtle squirtle squirtle chondrocraniums coal is so dark lacing your dreams te t e te t e te t e te 0';
console.log('Quebrar em array: ', mensagem.split(' '))
console.log((mensagem.split(' ')).length);
let i = 0;
let pal = ''
let palnovo = ''
do{
    console.log(mensagem.split(' ')[i])
    palnovo = mensagem.split(' ')[i]
    console.log(mensagem.split(' ')[i].length)
    i++

    if(palnovo.length>pal.length)
        {
        pal = palnovo
        }
}
while(mensagem.split(' ')[i]!=0)
    console.log('A maior palavra é:', pal)





































