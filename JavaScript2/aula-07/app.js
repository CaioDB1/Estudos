
let isUserLoggedIn = false

if (!isUserLoggedIn) {
console.log('Você precisa fazer login para continuar!')
}

console.log(!true)
console.log(!false)


const scores = [50, 25, 0, 30, 100, 20, 10]

for (let i = 0; i < scores.length; i++){        
    if (scores[i] === 0){
        continue //ignora o código abaixo e continua o loop
    }

    console.log(`sua pontuação: ${scores[i]}`)

    if(scores[i] === 100){
        console.log('parabéns, você atingiu a pontuação máxima')
        break //para o loop
    }
} 


const grade = 'C'

switch(grade){
    case 'A':
        console.log('Você tirou um A')
        break
    case 'B':
        console.log('Você tirou um B')
        break
    case 'C':
        console.log('Você tirou um C')
        break
    case 'D':
        console.log('Você tirou um D')
        break
    case 'E':
        console.log('Você tirou um E')
        break
    default:
        console.log('nota inválida')
        
}
