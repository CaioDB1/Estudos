const mensagem = 'Mensagem';
const mensagem2 = ' enviada';


console.log('Tamanho: ',mensagem.length);
console.log('Concatenar: ', mensagem.concat(mensagem2));
console.log('Concatenar com soma: ', mensagem + mensagem2);
console.log('Concatenar com ECMAScript: ', `Concatenado ${mensagem}${mensagem2}`);
console.log(mensagem.substring(3));
console.log(mensagem.substring(3,5));
console.log('Quebrar em array: ', mensagem.split('a'))
console.log('Maiusculo: ', mensagem.toUpperCase(mensagem))
console.log('Minusculo: ', mensagem.toLowerCase(mensagem))
console.log('Replace: ', mensagem.replace('Men', 'Massagem'))
console.log(mensagem.repeat(3));
const letras = [...mensagem];
console.log(letras);