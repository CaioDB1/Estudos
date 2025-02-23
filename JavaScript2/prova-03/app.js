// Nível 3: Fácil
// Crie um array chamado comidas com três alimentos.
// Verifique se "pizza" está no array. Se sim, exiba "Pizza está na lista!". Se não, exiba "Pizza não está na lista!".

const alimentos = ['pizza', 'arroz', 'batata']

if(alimentos.includes('pizza') === true){
    console.log(`Pizza está na lista!`)
} else {console.log(`Pizza não está na lista!`)}


// Nível 4: Intermediário
// Armazene o dia atual da semana em uma constante chamada dia (ex.: "segunda", "terça").
// Use condicionais para exibir "Dia útil" (segunda a sexta) ou "Fim de semana" (sábado ou domingo).

const dia = 'quarta'

switch(dia){
    case 'segunda':
    console.log('Dia útil')    
    break
    case 'terça':
    console.log('Dia útil')    
    break
    case 'quarta':
    console.log('Dia útil')    
    break
    case 'quinta':
    console.log('Dia útil')    
    break
    case 'sexta':
    console.log('Dia útil')    
    break
    case 'sabado':
    console.log('Fim de semana')    
    break
    case 'domingo':
    console.log('Fim de semana')    
    break
}

// Nível 5: Intermediário
// Armazene a temperatura atual em uma constante chamada temperatura (ex.: 25).
// Use condicionais para exibir "Frio" (abaixo de 15), "Agradável" (15 a 25) ou "Quente" (acima de 25).

const temperatura = 24

const frio = temperatura < 15
const agradavel = temperatura <= 25 && temperatura >= 15
const quente = temperatura > 25

if(frio){console.log(`Frio`)}
else if(agradavel){console.log(`Agradável`)}
else if(quente){console.log(`Quente`)}


// Nível 6: Intermediário
// Use um loop para criar um novo array chamado maioresQueDez com os números maiores que 10 presentes no array [4, 12, 8, 15, 9, 20].
// Exiba o novo array no console.

const arrayIni = [4, 12, 8, 15, 9, 20]
let maioresQueDez = []
for(let i = 0; i <arrayIni.length; i++){

    if(arrayIni>10){
        maioresQueDez += 
    }

    
}