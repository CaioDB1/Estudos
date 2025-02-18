let nome = 'NoMe'
console.log(nome)

const primeiroNome = 'Laala'
const sobrenome = 'Manaka'

const nomeOrientacaoOcidental = primeiroNome + ' ' + sobrenome
console.log(nomeOrientacaoOcidental)

const nomeOrientacaoOriental = sobrenome + ' ' + primeiroNome
console.log(nomeOrientacaoOriental)

console.log(nomeOrientacaoOriental[7])

const M = nomeOrientacaoOcidental.indexOf('M')
console.log(M)

let letras = nomeOrientacaoOcidental[0] + nomeOrientacaoOriental[0]
console.log(letras)

console.log(nomeOrientacaoOriental.length)
console.log(nomeOrientacaoOriental.toUpperCase())
console.log(nomeOrientacaoOriental.charCodeAt(0))