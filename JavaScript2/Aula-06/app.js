const age = 18

if(age === 18){
    console.log('Você tem 18 anos')
}

const simpsons = ['Marge', 'Homer', 'Lisa', 'Bart']

if(simpsons.length >= 5){
    console.log('O array tem bastante personagens.')
}


const password = 'oi123 '

if(password.length >= 12 && password.includes('1')){
    console.log('Senha muito forte =)')
} else if(password.length >= 8 || password.includes('1') && password.length >= 5){
    console.log('senha forte')
} else{
    console.log('A senha deve conter 8 ou mais caracteres')
}